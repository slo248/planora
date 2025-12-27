import { makeValidators, num, Static, str, url } from 'nestjs-envalid';

export const validators = makeValidators({
  PORT: num({ default: 4000 }),
  KEYCLOAK_SERVER_URL: url(),
  KEYCLOAK_REALM: str(),
  KEYCLOAK_CLIENT_ID: str(),
  KEYCLOAK_SECRET: str(),
  DATABASE_URL: url(),
});

export type Config = Static<typeof validators>;
