import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import { appReducer } from './reducers/appReducer'

let store = createStore(appReducer);
let rootElement = document.getElementById('container');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);