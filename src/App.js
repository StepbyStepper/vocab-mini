import React from 'react';
const { Component } = React;

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

class App extends Component {
  state = {
    correct: 'false',
    answered: 'false',
    keys: [],
    index: 0,
    input: ' '
  };

  render() {
    return (
      <div>
        vocab-mini
      </div>
    );
  }
}

export default App;
