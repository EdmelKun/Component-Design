import { useState } from "react";
import { Button } from "@mantine/core";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import TestModal from "./components/modals/Modal";

function App() {
  const [count, setCount] = useState(0);
  const [opened, setOpened] = useState(false);
  const [opened2, setOpened2] = useState(false);


  const handleOpen = () => {
    setOpened(true);
  };
  const handleClose = () => {
    setOpened(false);

  };

  const handleOpen2 = () => {
    setOpened2(true);
  };

  const handleClose2 = () => {
    setOpened2(false);
  };

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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button onClick={handleOpen}>Click me</Button>
        <Button onClick={handleOpen2}>Click me 2</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <TestModal
        opened={opened}
        onClose={handleClose}
        title="Secret Modal"
        description="Wala lang secret gani"
        centered={false}
        size="sm"
      />
      <TestModal
        opened={opened2}
        onClose={handleClose2}
        title="Testing Modal"
        description="Testing modal gani"
        centered={true}
        size="lg"
      />
      <TestModal
        opened={opened2}
        onClose={handleClose2}
        title="Testing Modal"
        description="Testing modal gani"
        centered={true}
        size="lg"
      />
      <TestModal
        opened={opened2}
        onClose={handleClose2}
        title="Testing Modal"
        description="Testing modal gani"
        centered={true}
        size="lg"
      />
    </>
  );
}

export default App;
