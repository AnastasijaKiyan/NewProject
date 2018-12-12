import { Reducer } from "redux";

export interface IList {
  id: number;
  name: string;
  adress: string;
  tags?: string[];
  lang: string;
  field: number;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IState {
  list: IList[];
}

export interface ICondition {
  search: string;
  lang: string[];
}

export interface IAction {
  type: string;
}

export interface IReducer extends Reducer {
  (state: IState, action: IAction): IState;
}

export interface IFilterHandler {
  (element: IList): boolean;
}

export interface IHandler {
  (text: string): void;
}

export interface IonTextChanged {
  (text: string): void;

}
