import * as ActionTypes from './actionTypes'

export const loadMessages = () => createTypedAction(ActionTypes.LOAD_MESSAGES);
export const addMessage = (message) => createTypedAction(ActionTypes.ADD_MESSAGE, message);
export const removeMessage = (messageId) => createTypedAction(ActionTypes.REMOVE_MESSAGE, messageId);
export const removeAllMessages = () => createTypedAction(ActionTypes.REMOVE_ALL_MESSAGES);

const createTypedAction = (theType, theData = {}) => {
    return {type: theType, data: theData}
};
