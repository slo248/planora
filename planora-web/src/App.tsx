import { useKeycloak } from "@react-keycloak/web";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Counter from "./components/Counter";
import viteLogo from "/vite.svg";

function App() {
  const { keycloak } = useKeycloak();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <div>{`User is ${
          !keycloak.authenticated ? "NOT " : ""
        }authenticated`}</div>

        <div>{`User email: ${keycloak.tokenParsed?.email || "Unknown"}`}</div>
        <div>{`User ID: ${keycloak.tokenParsed?.sub || "Unknown"}`}</div>

        {!!keycloak.authenticated && (
          <button type="button" onClick={() => keycloak.logout()}>
            Logout
          </button>
        )}
      </div>
    </>
  );
}

export default App;
