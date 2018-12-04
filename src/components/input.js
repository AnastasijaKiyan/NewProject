import React, { Component } from 'react';
import "./style.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.onTextChanged = this.onTextChanged.bind(this);
  }

  onTextChanged(e) {
    var text = e.target.value.trim();   // удаляем пробелы
    this.props.filter(text); // передаем введенный текст в родительский компонент
  }

  render() {
    return <input className="search" placeholder="Search" onChange={this.onTextChanged} />;
  }
}

export default Input;