import * as ActionTypes from "../actions/actionTypes"

export const messages = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.LOAD_MESSAGES:
            return loadMessages(state);
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

const loadMessages = (state) => {
    return Object.assign([], state, someMessages)
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

const removeAllMessages = () =>[];


let someMessages = [
    {name: "xelita"},
    {name: "prism"},
    {name: "cybersami"},
    {name: "mrtot"}
];