import React from 'react';
import Header from './components/NavBar'
import Footer from './components/Footer';
import './css/App.css';

export default ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
