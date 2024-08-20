import { Environment } from './environment.interface';
let environment: Environment;
export function setEnvValues(secret: Environment) {
  environment = secret;
}
export function getEnvValues() {
  return environment;
}
export const initilaizeProxyServiceURL: string = "https://proxyfunction-7uax65bu.ts.gateway.dev/sendsecvalue?key=AIzaSyCNWH8d0EBj4LEH-hMyCIfhfe25pdtSLqE";
//"https://api.github.com/users/sarathpswoolworths";