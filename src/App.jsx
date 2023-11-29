import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <h1>This is feature/JP2</h1>
      <h1>January</h1>
      <h1>February</h1>
      <h1>March</h1>
      <h1>April</h1>
      <h1>May</h1>
      <h1>June</h1>
      <h1>July</h1>
      <h1>August</h1>
      <h1>September</h1>
      <h1>October</h1>
      <h1>November</h1>
      <h1>December</h1>
    </>
  );
}

export default App;
