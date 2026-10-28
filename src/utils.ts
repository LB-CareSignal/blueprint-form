/* eslint-disable @typescript-eslint/no-unsafe-function-type */

export const isFunction = (obj: any): obj is Function => {
  return typeof obj === 'function';
};
