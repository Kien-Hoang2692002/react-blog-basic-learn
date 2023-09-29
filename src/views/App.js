import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";

function App() {
  let name = "Kien";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>Hello guys, I'm {name}</div>

        <MyComponent />
      </header>
    </div>
  );
}

export default App;
