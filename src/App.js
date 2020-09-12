import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import {HashRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Main/>
      </HashRouter>
    </div>
  );
}

export default App;
