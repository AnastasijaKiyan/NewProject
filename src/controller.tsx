import { Lists } from "./data/list";
import { createStore } from 'redux';
import { State, Action, Condition, List , Reducer, FilterHandler, Handler } from "./contracts";

export let list = Lists;

const initialState: State = {
	list: Lists
};

export const condition: Condition = {
	search: "", // "git"
	lang: []  // ["ua", "ru", "en"]
}

const reducer: Reducer = (state = initialState, action) => ({ 
	list: Lists.filter(filterHandler) 
});

const filterHandler: FilterHandler = (elem) => {
	if (elem.lang && condition.lang.length > 0 && !condition.lang.some(item => item == elem.lang)) // !!! Проверить !!!
		return false;

	if (elem["name"].toLowerCase().search(condition.search.toLowerCase()) > -1)
		return true;

	if (elem.tags && elem.tags.length > 0)
		for (let i = 0; elem.tags.length > i; i++)
			if (elem.tags[i].toLowerCase().search(condition.search.toLowerCase()) > -1)
				return true;

	return false;
}

// export const store = new createStore(reducer.bind(this), initialState);
export const store = createStore(reducer);

export const onSearch: Handler = (text) => {
	const action = { type: "onSearch" };
	condition.search = text;
	store.dispatch(action);
}

export const onAddLang: Handler = (lang) => {
	const action = { type: "onSearch" };
	if (condition.lang.some(item => item == lang)) return; // !!! Проверить !!!
	condition.lang.push(lang);
	store.dispatch(action);
}

export const onRemoveLang: Handler = (lang) => {
	const action = { type: "onRemoveLang" };
	const index = condition.lang.indexOf(lang);
	if (index < 0) return;
	condition.lang.splice(index, 1)
	store.dispatch(action);
}