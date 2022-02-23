import os from 'os';
import path from 'path';
import fs from 'fs';
import * as pine from '@pinefile/pine';

const PINE_FILE_ORDER = Object.freeze([
  'Pinefile',
  'pinefile.js',
  'pinefile.ts',
]);

const findGlobalFile = () => {
  for (const file of PINE_FILE_ORDER) {
    const p = path.join(os.homedir(), '.pine', file);
    if (fs.existsSync(p)) {
      return p;
    }
  }
  return null;
};

const runCLI = (argv: string[]) => {
  if (argv[0] === 'global') {
    const file = findGlobalFile();
    if (file) {
      argv = argv.slice(1);
      argv.push(`--file=${file}`);
    }
  }

  return pine.api.runCLI(argv);
};

export const register = (pine: any) => ({
  ...pine,
  api: {
    ...pine.api,
    runCLI,
  },
});
