import React, { Component } from 'react';
// import "./style.css";
import "../style.css";

import * as Controller from "./../controller";

class Input extends Component {
  onTextChanged = this.onTextChanged.bind(this);

  onTextChanged(e) {
    var text = e.target.value.trim();   // удаляем пробелы
    Controller.onSearch(text);
  }

  render() {
    return <input className="search" placeholder="Search" onChange={this.onTextChanged} />;
  }
}

export default Input;