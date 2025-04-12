const HTTP_REGEX = /^https?:\/\//;

const INSTALL_LANGUAGE_URL = '/api/code/languages';

const preselectedLanguages = [
  {
    language: 'node',
    version: '20.11.1',
  },
  {
    language: 'typescript',
    version: '5.0.3',
  },
  {
    language: 'java',
    version: '15.0.2',
  },
];

const processArgs = process.argv.slice(2);

let host;

const checkHost = () => {
  const hostArgIndex = processArgs.findIndex((item) => item === '--host');

  if (hostArgIndex === undefined) {
    console.error('Ошибка: не передан параметр host');

    process.exit(1);
  }

  const hostValue = processArgs[hostArgIndex + 1];

  if (!hostValue || !hostValue.match(HTTP_REGEX)) {
    console.error('Ошибка: некоррентное значение для host');

    process.exit(1);
  }

  host = hostValue;
};

const preinstallLanguages = async () => {
  checkHost();

  const installLanguageUrl = `${host}${INSTALL_LANGUAGE_URL}`;
  console.log(installLanguageUrl);

  const promises = preselectedLanguages.map((language) =>
    fetch(installLanguageUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(language),
    }).then((response) => response.json())
  );

  const results = await Promise.allSettled(promises);

  for (let i = 0; i < results.length; i++) {
    const current = results[i];

    if (current.status === 'fulfilled' && current.value?.status === 'success') {
      const { language, version } = current.value.data;

      console.log(`${language} ${version} is successfully installed`);
    } else {
      const { language } = preselectedLanguages[i];
      console.error(`Error with ${language}`);
      console.error(current.reason || current.value);
    }
  }
};

await preinstallLanguages();
