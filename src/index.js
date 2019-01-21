import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Timer from "./Timer";
import Test from "./Test";
import Header from "/components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Test />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
