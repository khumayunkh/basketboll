import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/header';
import Information from './components/Information/Information';
import Table from './components/Table/Table';
import Sponsors from './components/Sponsors/Sponsors';
import Footer from './components/Footer/Footer';
import NavbarMobile from './components/Navbar-mobile/NavbarMobile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <NavbarMobile/>
      <Routes>
        <Route 
          path='/'
          element={<>
            <Information/>
            <Table/>
          </>}
        />
      </Routes>
      <Sponsors/>
      <Footer/>
    </>
  );
}

export default App;
