const redux = require("redux");

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + action.payload,
      };
    case "DECREMENT":
      return { counter: state.counter - action.payload };
    default:
      return state;
  }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const updatedState = store.getState();
  console.log("updated", updatedState);
};

store.subscribe(counterSubscriber);

store.dispatch({
  type: "INCREMENT",
  payload: 2,
});
store.dispatch({
  type: "DECREMENT",
  payload: 1,
});
