import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import './assets/css/style.scss'
import Home from './pages/home';
import Detail from './pages/detail';
import Register from './pages/register';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './pages/project';
import Profile from './pages/profile';
import Page404 from './pages/page404';
import Demo from './pages/demo';
import PopupLogin from './components/PopupLogin';
import Loading from './components/Loading';

function App() {
  return <BrowserRouter>
    <Header />
    <Loading />
    <Switch>
      <Route path="/thong-tin-ca-nhan" component={Profile} />
      <Route path="/chi-tiet/:id">
        <Detail />
      </Route>
      <Route path="/" exact >
        <Home />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>

    <Footer />
  </BrowserRouter>;
  // return <Register />;

}

export default App;
