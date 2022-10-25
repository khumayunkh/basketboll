import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/header';
import Information from './components/Information/Information';

function App() {
  return (
    <div className="App">
      <Header/>
      <Information/>
    </div>
  );
}

export default App;
