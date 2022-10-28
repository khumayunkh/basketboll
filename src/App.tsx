import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/header';
import Information from './components/Information/Information';
import Table from './components/Table/Table';
import Sponsors from './components/Sponsors/Sponsors';
import Footer from './components/Footer/Footer';
import NavbarMobile from './components/Navbar-mobile/NavbarMobile';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavbarMobile/>
      <Information/>
      <Table/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default App;
