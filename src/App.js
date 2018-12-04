import React, { Component } from 'react';
import Section from "./components/section";
import Category from "./data/category";

class App extends Component {
  render() {
    return (
      <div className="App">
        {
            Category.map(elem => <Section key={elem.id} elem={elem} />)
        }
      </div>
    );
  }
}

export default App;
