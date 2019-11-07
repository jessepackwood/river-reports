import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import RiverContainer from './containers/RiverContainer'

function App() {
  return (
    <div className="App">
      <Header />
      <RiverContainer />
    </div>
  );
}

export default App;
