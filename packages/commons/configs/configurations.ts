import * as _ from 'lodash';

export class Configuration<T> {
  ref: T;
  compile(...args: Array<Partial<T>> ): T {
    // tslint:disable-next-line:no-console
    console.log('...args', args);
    // @ts-ignore
    this.ref = _.merge(...args);
    return this.ref;
  }
  get(): T {return this.ref; }
}
