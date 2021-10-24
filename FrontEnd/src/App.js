import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/homePage';
import Community from './pages/community';
import Blogs from './pages/blogs';
import LogIn from './pages/logIn';
import SignUp from './pages/signUp';
import NotFound from './pages/notFound';
import About from './pages/about';
import Conditions from './pages/conditions';
import Contacts from './pages/contacts/index.jsx'
import CreatePost from './pages/community/creatPost'
import Vocabularies from './pages/vocabularies';


function App() {
  const Login= true;
  
  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact><HomePage/></Route>
          <Route path={`/chude/:_id`}><Vocabularies/></Route>
          <Route path="/congdong/ask" exact><CreatePost /></Route>
          <Route path="/congdong"> <Community isLogin={Login} /></Route>
          <Route path="/baiviet" component={Blogs}></Route>
          <Route path="/dangnhap" component={LogIn}></Route>
          <Route path="/dangky" component={SignUp}></Route>
          <Route path="/gioithieu"><About/></Route>
          <Route path="/dieukhoan"><Conditions/></Route>
          <Route path="/lienhe"><Contacts/></Route>
          <Route><NotFound/></Route>
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
