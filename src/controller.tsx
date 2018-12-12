import { Lists } from "./data/list";
import { createStore, Store } from "redux";
import {
  IState,
  IAction,
  ICondition,
  IReducer,
  IFilterHandler,
  IHandler
} from "./contracts";

export let list = Lists;

const initialState: IState = {
  list: Lists
};

export const condition: ICondition = {
  search: "", // "git"
  lang: [] // ["ua", "ru", "en"]
};

const filterHandler: IFilterHandler = (elem): boolean => {
  if (
    elem.lang &&
    condition.lang.length > 0 &&
    !condition.lang.some(item => item == elem.lang)
  )
    // !!!
    return false;

  if (elem["name"].toLowerCase().search(condition.search.toLowerCase()) > -1)
    return true;

  if (elem.tags && elem.tags.length > 0)
    for (let i = 0; elem.tags.length > i; i++)
      if (
        elem.tags[i].toLowerCase().search(condition.search.toLowerCase()) > -1
      )
        return true;

  return false;
};

const reducer: IReducer = (
  state: IState = initialState,
  action: IAction
): IState => ({
  list: Lists.filter(filterHandler)
});

// export const store = new createStore(reducer.bind(this), initialState);
export const store: Store<IState> = createStore(reducer);

export const onSearch: IHandler = (text: string): void => {
  const action = { type: "onSearch" };
  condition.search = text;
  store.dispatch(action);
};

export const onAddLang: IHandler = (lang: string): void => {
  const action = { type: "onSearch" };
  if (condition.lang.some(item => item == lang)) return; // !!!
  condition.lang.push(lang);
  store.dispatch(action);
};

export const onRemoveLang: IHandler = (lang: string): void => {
  const action = { type: "onRemoveLang" };
  const index = condition.lang.indexOf(lang);
  if (index < 0) return;
  condition.lang.splice(index, 1);
  store.dispatch(action);
};
