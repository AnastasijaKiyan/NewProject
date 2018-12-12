import React, { Component } from 'react';
import "../style/styles/style.css";

import * as Controller from "../controller";

class Input extends Component {
  onTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    var text = e.target.value.trim();   // удаляем пробелы
    Controller.onSearch(text);
  }

  render() {
    return <input className="search" placeholder="Search" onChange={this.onTextChanged} />;
  }
}

export default Input;