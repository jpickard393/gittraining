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
      <h2 className="read-the-docs">This is feature/JP1</h2>
      <h2>This is feature/jp3</h2>
      <h2>Monday</h2>
      <h2>Tuesday</h2>
      <h2>Wednesday</h2>
      <h2>Thursday</h2>
      <h2>Friday</h2>
      <h2>Saturday</h2>
      <h2>Sunday</h2>
      <h1>This is a new addition to feature/jp3</h1>
    </>
  );
}

export default App;
