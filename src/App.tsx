import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/header';
import Information from './components/Information/Information';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <Header/>
      <Information/>
      <Table/>
    </div>
  );
}

export default App;
