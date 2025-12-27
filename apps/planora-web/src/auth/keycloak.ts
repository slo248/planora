import Keycloak from "keycloak-js";
import { env } from "../config";

export const keycloakClient = new Keycloak({
  url: env.VITE_KEYCLOAK_URL,
  realm: env.VITE_KEYCLOAK_REALM,
  clientId: env.VITE_KEYCLOAK_CLIENT_ID,
});

export const initConfig = {
  onLoad: "login-required",
  checkLoginIframe: false,
};
