import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Joke from "./joke";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Joke></Joke>
        <a
          className="App-link"
          href="https://sv443.net/jokeapi/v2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JokeAPI
        </a>
      </header>
    </div>
  );
}

export default App;
