import * as ActionTypes from "actionTypes";

export const createLoadMessagesAction = () => createTypedAction(ActionTypes.LOAD_MESSAGES);
export const createAddMessageAction = (message) => createTypedAction(ActionTypes.ADD_MESSAGE, message);
export const createRemoveMessageAction = (messageId) => createTypedAction(ActionTypes.REMOVE_MESSAGE, messageId);
export const createRemoveAllMessagesAction = () => createTypedAction(ActionTypes.REMOVE_ALL_MESSAGES);

export const createTypedAction = (theType, theData = {}) => {
    return {type: theType, data: theData}
};
