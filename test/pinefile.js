import { run } from '../src';

export default () => console.log('default');
export const test = () => console.log('foo');
export const ci = async () =>
  run('npm run lint && npm run test', {
    cwd: `${__dirname}/..`,
  });
