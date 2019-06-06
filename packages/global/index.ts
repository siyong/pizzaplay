import { providerConfig } from './providers/config.provider';
import { IRedisConfig } from './configs/iredis.config';
import { ISomethingConfig } from './configs/ISomething.config';

export * from './app.module';

// sample config

type IConfig = IRedisConfig & ISomethingConfig;

const baseConfig: IConfig  = {redis: { db: 1, host: 'acs'}};
const overrideConfig: IConfig = { redis: {db: 2}};

const  config = providerConfig('IConfig', baseConfig, overrideConfig);

// tslint:disable-next-line:no-console
console.log('config', config);
