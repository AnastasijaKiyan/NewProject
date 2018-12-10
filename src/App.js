import React, { Component } from 'react';
import Section from "./components/section";
import Category from "./data/category";
import Input from "./components/input";
import Checkbox from "./components/checkbox";

import * as Controller from "./controller";

class App extends Component {
	state = Controller.store.getState();
	unsubscribe = () => { };

	componentDidMount() {
		this.unsubscribe = Controller.store.subscribe(() => {
			this.setState(Controller.store.getState())
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<div >
				<div className="inputs">
					<div className="input"><Input /></div>
					<div className="checbox"><Checkbox /></div>
				</div>
				<div className="App">
					{
						Category.map(category =>
							<Section key={category.id} category={category.name} list={this.state.list.filter(item => item.field === category.id)} />
						)
					}
				</div>
			</div>
		);
	}
}

export default App;
