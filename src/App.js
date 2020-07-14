import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Persons from "./components/person/persons";
import ServerUrl from "./config";
function App() {
  return (
    <div className="App">
      <Persons ServerUrl={ServerUrl} />
    </div>
  );
}

export default App;
