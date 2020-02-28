import React from 'react';
const { Component } = React;

const Dictionary = {
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
    correct: false,
    answered: false,
    keys: Object.keys(Dictionary),
    index: 0,
    input: ''
  };

  render() {
    return (
      <div>
        <form>

          <label>
            English Word:
            <input type="text" name="en_word" />
          </label>
          <br />
          <label>
            Russian Word  
            <input type="text" name="ru_word" />
          </label>
          <br />    
          <button>CHECK</button>
          <button>NEXT</button>
        </form>
      </div>
    );
  }
}

export default App;
