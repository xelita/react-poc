var React = require('react');
var ReactDOM = require('react-dom');

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => (
    <div>
        <span>Counter state: </span>
        <span>{value}</span>
        <div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    </div>
);

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({type: 'INCREMENT'})}
            onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        />,
        document.getElementById("counter")
    );
};

store.subscribe(render);
render();
