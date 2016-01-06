import * as ActionTypes from "../actions/actionTypes"

export const appInfoReducer = (state, action) => {
    return Object.assign({}, state, {
        appInfo: {
            name: "react-poc"
        }
    })
};