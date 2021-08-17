import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/homePage';
import Community from './pages/community';
import Posts from './pages/posts';
import SignIn from './pages/signIn'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/congdong" component={Community}></Route>
        <Route path="/baiviet" component={Posts}></Route>
        <Route path="/dangnhap" component={SignIn}></Route>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
