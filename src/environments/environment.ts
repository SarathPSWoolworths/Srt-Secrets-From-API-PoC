import { Environment } from './environment.interface';
let environment: Environment;
export function setEnvValues(secret: Environment) {
  environment = secret;
}
export function getEnvValues() {
  return environment;
}
export const initilaizeProxyServiceURL: string = "https://api.github.com/users/sarathpswoolworths";