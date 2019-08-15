import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import './css/App.css';

export default ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};
