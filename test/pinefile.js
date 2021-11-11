import { log, run } from '../dist';

export default () => log.info('Hello, Pinex!');

export const test = async () =>
  run('npm run lint && npm run tsc', {
    cwd: `${__dirname}/..`,
  });
