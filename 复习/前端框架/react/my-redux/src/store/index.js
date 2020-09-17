import { createStore, applyMiddleware } from '../my/custom-redux'
import logger from "../middleware/logger";

function reducer(state = 0, action) {
  switch (action.type) {
    case 'add':
      const currentState = action.val ? state + action.val : state + 1;
      return currentState;
    case 'minus':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(logger));

export default store;
