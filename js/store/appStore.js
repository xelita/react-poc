import { appReducer } from "../reducers/appReducer"

const { createStore } = Redux;
export const appStore = createStore(appReducer);