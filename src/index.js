import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <Timer />;
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
