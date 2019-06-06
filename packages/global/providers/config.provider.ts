import {Configuration} from '@pizzaplay/commons';

export const providerConfig = <T>(name: string, ...args: Array<Partial<T>>) => {
  // @ts-ignore
  const configuration = new Configuration<T>();
  return{
  provide: name,
  useValue: configuration.compile(...args),
};
};
