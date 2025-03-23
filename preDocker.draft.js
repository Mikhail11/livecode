const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const blueColor = '\x1b[36m';
const magentaColor = '\x1b[35m';
const greenColor = '\x1b[32m';
const redColor = '\x1b[31m';
const resetColors = '\x1b[0m';

const logPath = (path) => {
  console.log(`${magentaColor}${path}${resetColors}\n`);
};

// Функция для рекурсивного удаления папки
function deleteFolderRecursive(folderPath) {
  if (!fs.existsSync(folderPath)) {
    console.log('The folder does not exist:');

    logPath(folderPath);

    return;
  }

  try {
    fs.rmSync(folderPath, { recursive: true });

    console.log(`The folder is deleted:`);
    logPath(folderPath);
  } catch (error) {
    console.error(`Error occurred while deleting the folder:`);
    logPath(folderPath);

    console.error(error);
  }
}

function runCommand(command, folderPath) {
  return new Promise((resolve, reject) => {
    console.log(`Running command: ${blueColor}${command}${resetColors} in folder:`);
    logPath(folderPath);

    exec(command, { cwd: folderPath }, (error, stdout, stderr) => {
      if (error) {
        console.log(`${redColor}Error:${resetColors} ${stderr}`);

        reject(error);
      } else {
        console.log(`${greenColor}Success:${resetColors} ${stdout}`);

        resolve();
      }
    });
  });
}

const serverPath = path.resolve(__dirname, 'apps', 'server');
const serverBuildPath = path.resolve(serverPath, 'build');

const clientPath = path.resolve(__dirname, 'apps', 'client');
const clientBuildPath = path.resolve(clientPath, 'build');

async function buildServerAndClient() {
  try {
    deleteFolderRecursive(serverBuildPath);

    await runCommand('npm run build', serverPath);

    deleteFolderRecursive(clientBuildPath);

    await runCommand('npm run build', clientPath);
  } catch (error) {
    console.error('Build failed:', error);
  }
}

buildServerAndClient();
