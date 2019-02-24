import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Pomodoro from "./Pomodoro";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Pomodoro />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
