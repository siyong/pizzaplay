export abstract class IConfiguration {
  abstract get<T = any>(name?: string, defaultValue?: T): T | null;
}
