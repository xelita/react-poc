import * as ActionTypes from "../actions/actionTypes"

export const messagesReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.LOAD_MESSAGES:
            return loadMessages(state, action);
        case ActionTypes.ADD_MESSAGE:
            return addMessage(state, action);
        case ActionTypes.REMOVE_MESSAGE:
            return removeMessage(state, action);
        case ActionTypes.REMOVE_ALL_MESSAGES:
            return removeAllMessages(state, action);
        default:
            return state;
    }
};

const loadMessages = (state, action) => {
    return Object.assign({}, state, {
        messages: action.messages
    })
};

const addMessage = (state, action) => {
    return Object.assign({}, state, {
        messages: [
            ...state.messages,
            action.data
        ]
    })
};

const removeMessage = (state, action) => {
    return Object.assign({}, state, {
        messages: action.messages
    })
};

const removeAllMessages = (state, action) => {
    return Object.assign({}, state, {
        messages: []
    })
};