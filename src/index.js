import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Timer from "./Timer";
import Test from "./Test";

function App() {
  return (
    <div className="App">
      <Test />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
