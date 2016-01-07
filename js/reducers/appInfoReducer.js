import * as ActionTypes from "../actions/actionTypes"

export const appInfo = (state, action) => {
    return Object.assign({}, state, {
        appInfo: {
            name: "react-poc"
        }
    })
};