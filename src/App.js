import React, { Component } from 'react';
import Section from "./components/section";
import Category from "./data/category";
import Input from "./components/input";
import Checkbox from "./components/checkbox";
import List from "./data/list";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: List,
      
    
    };

    this.filterList = this.filterList.bind(this);
  }

  filterList(text) {
    const list = List.filter(elem => {
      if (elem["name"].toLowerCase().search(text.toLowerCase()) > -1) {
        return true;
      } else if (elem.tags && elem.tags.length > 0) {
        for (let i = 0; elem.tags.length > i; i++) {
          const tag = elem.tags[i];
          if (tag.toLowerCase().search(text.toLowerCase()) > -1) {
            return true;
          }
        }
        return false;
      } else return false;
    });

    this.setState({ list });

  }


  render() {
    return (
      <div>
        <Input filter={this.filterList} />
        <Checkbox />
        <div className="App">
          {
            Category.map(elem => <Section key={elem.id} elem={elem} list={this.state.list} />)

          }
        </div>
      </div>
    );
  }
}

export default App;
