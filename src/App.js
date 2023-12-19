import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Content from './components/home';

const App = () => {
  return (
    <>
      <Navbar />
      <Content/>
      <Footer />
      
    </>
  );
}

export default App;
