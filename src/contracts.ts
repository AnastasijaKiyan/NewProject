export interface List {
    id: number,
    name: string,
    adress: string,
    tags?: string[],
    lang: string,
    field: number
}

export interface Category {

}

export interface State {
     list: List[]
}

export interface Condition {
    search: string,
	lang: string[]
}

export interface Action {
    type: string
}

export interface Reducer {(
    state: State,
    action: Action
): State;}

export interface FilterHandler {(
    element: List
):boolean;}

export interface Handler {(
    text: string
): void;}