import { makeValidators, num, Static, str } from 'nestjs-envalid';

export const validators = makeValidators({
  PORT: num({ default: 4000 }),
  KEYCLOAK_SERVER_URL: str(),
  KEYCLOAK_REALM: str(),
  KEYCLOAK_CLIENT_ID: str(),
  KEYCLOAK_SECRET: str(),
});

export type Config = Static<typeof validators>;
