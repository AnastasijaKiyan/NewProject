import List from "./data/list";

export const condition = {
    search: "", // "git"
    lang: []  // ["ua", "ru", "en"]
}

export let list = List;

let subscriber = () => {};

export const onSearch = (text) => {
    condition.search = text;
    filter();
}

export const onAddLang = (lang) => {
    if (condition.lang.includes(lang)) return;
    condition.lang.push(lang);
    filter();
}

export const onRemoveLang = (lang) => {
    const index = condition.lang.indexOf(lang);
    if (index < 0) return;
    condition.lang.splice(index, 1)
    filter();
}

export const subscribe = (cb) => {
    subscriber = cb;
}

const filter = () => {
    list = [];

    list = List.filter(elem => {
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

    subscriber();
}
