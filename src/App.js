import React from 'react';
import HomePage from './pages/homePage';
import Header from './components/header';
import Footer from './components/footer';
import {  Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Header />
    <Route path="/" component={HomePage}></Route>
    <Footer />
    </>
  );
}

export default App;
