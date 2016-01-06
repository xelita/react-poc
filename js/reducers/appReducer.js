import { combineReducers } from 'redux'

import {messagesReducer} from "messagesReducer"
import {appInfoReducer} from "appInfoReducer"

export const appReducer = combineReducers({
    messagesReducer,
    appInfoReducer
});