import React, { Component } from 'react';
import Section from "./components/section";
import Category from "./data/category";
import Input from "./components/input";
import Checkbox from "./components/checkbox";

import * as Controller from "./controller";

class App extends Component {
  constructor(props) {
    super(props);

     Controller.store.subscribe(() => this.forceUpdate());
  }

  render() {
    const list = Controller.store.getState().list;
    return (
      <div >
        <div className="inputs">
          <div className="input"><Input /></div>
          <div className="checbox"><Checkbox /></div>
        </div>
        <div className="App">
          {
            Category.map(elem => <Section key={elem.id} elem={elem} list={list} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
