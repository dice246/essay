import { createStore, applyMiddleware } from '../custom-redux'
import logger from "../middleware/logger";

function reducer(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(logger));

export default store;
