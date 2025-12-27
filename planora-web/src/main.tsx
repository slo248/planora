import { ReactKeycloakProvider } from "@react-keycloak/web";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { initConfig, keycloakClient } from "./auth/keycloak.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactKeycloakProvider authClient={keycloakClient} initOptions={initConfig}>
      <App />
    </ReactKeycloakProvider>
  </StrictMode>
);
