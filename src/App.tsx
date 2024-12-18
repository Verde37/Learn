import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LearnReactButton } from './components/LearnReactButton/LearnReactButton';
import style from "./App.module.scss"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <LearnReactButton/>
      </header>
    </div>
  );
}

export default App;
