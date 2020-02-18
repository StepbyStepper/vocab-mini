import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let Dictionary = {
    available: "доступный",
    average: "средний",
    beyond: "за",
    borrow: "одолжить",
    capability: "возможность",
    charge: "заряжать",
    cholesterol: "холестерин",
    comparison: "сравнение",
    complain: "жаловаться",
    consumption: "потребление",
    deny: "отказываться",
    decision: "решение",
    deck: "колода",
    declare: "объявить",
    decline: "отклонение",
    decrease: "уменьшить",
    deputy: "депутат",
    derive: "получить",
    describe: "описать",
    description: "описание"    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
