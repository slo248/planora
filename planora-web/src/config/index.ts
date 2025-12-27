import { cleanEnv, str } from "envalid";

export const env = cleanEnv(import.meta.env, {
  VITE_KEYCLOAK_URL: str(),
  VITE_KEYCLOAK_REALM: str(),
  VITE_KEYCLOAK_CLIENT_ID: str(),
});
