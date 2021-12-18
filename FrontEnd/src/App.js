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
import Terms from './pages/terms';
import Contacts from './pages/contacts'
import CreatePost from './pages/community/creatPost'
import Vocabularies from './pages/vocabularies';
import Vocabulary from './pages/vocabulary';
import { ThemeProvider , createTheme } from '@mui/material/styles';
import './index.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Muli,sans-serif"',
    ].join(','),
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '1.3rem',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          body2: { fontSize: '2rem'},
        },
      },
    },
  },  
});
function App() {
  const Login= true;
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" exact><HomePage/></Route>
            <Route path={`/vocabularies/:_id`}><Vocabularies/></Route>
            <Route path={`/vocabulary/:_id`}><Vocabulary/></Route>
            <Route path="/community/ask" exact><CreatePost /></Route>
            <Route path="/community"> <Community isLogin={Login} /></Route>
            <Route path="/blogs" component={Blogs}></Route>
            <Route path="/login" component={LogIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/about"><About/></Route>
            <Route path="/terms"><Terms/></Route>
            <Route path="/contacts"><Contacts/></Route>
            <Route><NotFound/></Route>
          </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
