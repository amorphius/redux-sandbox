import {fromJS} from 'immutable'

let defaultState = {
    prop1: 13,
    prop2: 42,
    log: []
}

let initialState = {
    router: null,
    app: fromJS(defaultState)
}

export default initialState