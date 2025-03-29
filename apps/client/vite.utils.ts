import path from 'path';

interface ItsConfig {
  compilerOptions: {
    paths: Record<string, string[]>;
  };
}

export const getTSAliasPaths = (tsConfig: ItsConfig): Record<string, string> => {
  const {
    compilerOptions: { paths },
  } = tsConfig;

  const aliases: Record<string, string> = {};

  const regExp = /\/\*/;

  for (const alias in paths) {
    const formatedAlias = alias.replace(regExp, '');
    const formatedPath = paths[alias][0].replace(regExp, '');

    aliases[formatedAlias] = path.resolve(__dirname, `./${formatedPath}`);
  }

  return aliases;
};
