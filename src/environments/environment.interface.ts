export interface Environment {
  production?: boolean;
  SomeApp?: {
    id?: string;
    url?: string;
    token?: string;
    environment?: string;
  };
  key?: string;
  token?: string;
}
