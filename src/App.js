import React from 'react';

import Header from './components/Header/Header';

import Main from './components/Main/Main';

import Footer from './components/Footer/Footer';

import Features from './components/Features/Features';

import Details from './components/Details/Details';

import './style.css';



function App() {
  return (
    <React.Fragment>
      
      <Header />

      <Main />

      <Features />

      {/* <Details /> */}

      <Footer />
    
  </React.Fragment>
  );
}

export default App;
