export function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }

  let currentState = undefined;
  let currentListeners = [];

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    currentListeners.push(listener)
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)

    currentListeners.forEach(v => v());
    return action
  }

  // 初始化state
  dispatch({
    type: '@@CUSTOM-REDUX'
  })

  return {
    getState,
    dispatch,
    subscribe
  }
}
