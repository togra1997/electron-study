import "./components/main.css";
import Test from "./components/test.tsx";

function App(): React.JSX.Element {
  return (
    <>
      <h1 className="text-xl italic">hello</h1>
      <h2>App</h2>

      <button type="button" onClick={() => window.electron.ipcRenderer.send("ping")}>
        push
      </button>
      <Test></Test>

    </>
  );
}

export default App;
