import React, { Component } from 'react';
import Section from "./components/section";
import Category from "./data/category";
import Input from "./components/input";
import List from "./data/list";

let visible = false;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { list: List};
                      
    this.filterList = this.filterList.bind(this);
}

  filterList(text) {
    var filteredList = List.filter(list => list["name"].toLowerCase().search(text.toLowerCase()) !== -1); 
    this.setState({list: filteredList});
}


  render() {
    return (
      <div>
        <Input filter={this.filterList}/>
        <div className="App">
          {
            Category.map(elem => <Section key={elem.id} elem={elem} list={this.state.list}/>)

          }
        </div>
      </div>
    );
  }
}

export default App;
