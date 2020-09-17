import React from 'react';
import './App.css';
import { connect } from '../src/my/custom-react-redux'
import { add, minus, reset } from '../src/action'

function App(props) {
  const { num, add, minus, reset } = props;

  console.log(props)

  return (
    <div className="App">
      <header className="App-header">
        <p>{num}</p>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={reset}>reset</button>
      </header>
    </div>
  );
}

export default connect(
  (state) => {
    return {
      num: state
    }
  },
  {
    add,
    minus,
    reset
  }
)(App);
