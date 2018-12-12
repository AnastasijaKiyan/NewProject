import React, { Fragment } from 'react'
import "../style/styles/style.css";

import * as Controller from "../controller";

class CheckBox extends React.Component {
  handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) Controller.onAddLang(e.target.name);
    else Controller.onRemoveLang(e.target.name);
  }

  render(): JSX.Element {
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

  getInput(lang: string): JSX.Element {
    return <Fragment>
      <input className="checkbox" type="checkbox" name={lang} onChange={this.handleChecked} />
      <label htmlFor="rus">{lang.toUpperCase()}</label>
    </Fragment>
  }
}



export default CheckBox;