import React, { Fragment } from 'react'
import "./style.css";

import * as Controller from "./../controller";

class CheckBox extends React.Component {
  constructor() {
    super();
    this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
  }

  handleChecked(e) {
    if (e.target.checked) Controller.onAddLang(e.target.name);
    else Controller.onRemoveLang(e.target.name);
  }

  render() {
    // remove () after handleChecked because you need pass 
    // reference to function
    // also add return before <div>
    return (
      <div>
        {this.getInput("en")}
        {this.getInput("ru")}
      </div>
    )
  }

  getInput(lang) {
    return <Fragment>
      <input className="checkbox" type="checkbox" name={lang} onChange={this.handleChecked} />
      <label for name="rus">{lang.toUpperCase()}</label>
    </Fragment>
  }
}



export default CheckBox;