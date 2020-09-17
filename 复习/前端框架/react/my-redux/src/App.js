import React from 'react';
import './App.css';
import store from './store/index'

function App() {
  const add = () => store.dispatch({type: 'add'})

  return (
    <div className="App">
      <header className="App-header">
        <p>{store.getState()}</p>
        <button onClick={add}>add</button>
      </header>
    </div>
  );
}

export default App;
