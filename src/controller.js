import List from "./data/list";
import { createStore } from 'redux';


export let list = List;

const initialState = { list: List };

export const condition = {
    search: "", // "git"
    lang: []  // ["ua", "ru", "en"]
}

function reducer (state, action) {
    var result = List.filter(elem => {
        if (elem.lang && condition.lang.length > 0 && !condition.lang.includes(elem.lang)) {
          return false;
        }
  
        if (elem["name"].toLowerCase().search(condition.search.toLowerCase()) > -1) {
          return true;
        } else if (elem.tags && elem.tags.length > 0) {
          for (let i = 0; elem.tags.length > i; i++) {
            const tag = elem.tags[i];
            if (tag.toLowerCase().search(condition.search.toLowerCase()) > -1) {
              return true;
            }
          }
          return false;
        } else return false;
      });
    return { list: result } 
}

export const store = new createStore(reducer.bind(this), initialState);

export const onSearch = (text) => {
    const action = { type: "onSearch" };
    condition.search = text;
    store.dispatch(action);
}

export const onAddLang = (lang) => {
    const action = { type: "onSearch" };
    if (condition.lang.includes(lang)) return;
    condition.lang.push(lang);
    store.dispatch(action);
}

export const onRemoveLang = (lang) => {
    const action = { type: "onRemoveLang" };
    const index = condition.lang.indexOf(lang);
    if (index < 0) return;
    condition.lang.splice(index, 1)
    store.dispatch(action);
}