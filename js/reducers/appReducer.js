import { combineReducers } from 'redux'

import { messages } from './messagesReducer'
import { appInfo } from './appInfoReducer'

export const appReducer = combineReducers({
    messages,
    appInfo
});