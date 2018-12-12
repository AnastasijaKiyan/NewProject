import React, { Component } from 'react';
import Section from "./components/section";
import { category as Category } from "./data/category";
import Input from "./components/input";
import Checkbox from "./components/checkbox";

import * as Controller from "./controller";
import { IState, ICategory, IList } from './contracts';

class App extends Component<{}, IState> {
	state: IState = Controller.store.getState();
	unsubscribe = () => { };

	componentDidMount(): void {
		this.unsubscribe = Controller.store.subscribe(() => {
			this.setState(Controller.store.getState())
		});
	}

	componentWillUnmount(): void {
		this.unsubscribe();
	}

	render(): JSX.Element {
		return (
			<div >
				<div className="inputs">
					<div className="input"><Input /></div>
					<div className="checbox"><Checkbox /></div>
				</div>
				<div className="App">
					{
						Category.map((category: ICategory): JSX.Element =>
							<Section key={category.id} category={category.name} list={this.state.list.filter((item: IList )=> item.field === category.id)} />
						)
					}
				</div>
			</div>
		);
	}
}

export default App;
