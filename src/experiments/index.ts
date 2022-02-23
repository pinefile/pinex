import { register as registerGlobalFile } from './global-file';

export const register = (pine: any) =>
  [registerGlobalFile].reduce((prev, cur) => cur(prev), pine);
