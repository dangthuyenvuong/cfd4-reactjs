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
import Contact from './pages/contact';
import Demo from './pages/demo';
import PopupLogin from './components/PopupLogin';
import PopupRegister from './components/PopupRegister';
import Team from './pages/team';
import React, { useRef } from 'react';
import PrivateRouter from './core/PrivateRouter';
import AppProvider from './core/AppProvider'
import Courselist from './pages/Courselist';


export const Context = React.createContext({});

function App() {
  let refLogin = useRef()
  let refRegister = useRef()

  function openPopupRegister() {
    refLogin.current.style.display = 'none'
    refRegister.current.style.display = 'flex'

  }

  function closePopupRegister() {
    refRegister.current.style.display = 'none'
  }

  function openPopupLogin() {
    refLogin.current.style.display = 'flex'
    refRegister.current.style.display = 'none'
  }

  function closePopupLogin() {
    refLogin.current.style.display = 'none'
  }

  return <AppProvider store={{ openPopupLogin, closePopupLogin, openPopupRegister, closePopupRegister }}>
    <PopupLogin ref={refLogin} />
    <PopupRegister ref={refRegister} />
    <Header />
    <Switch>
      <PrivateRouter path="/thong-tin-ca-nhan" component={Profile} />
      <PrivateRouter path="/dang-ky/:slug" component={Register} />
      <Route path="/team" component={Team} />
      <Route path="/khoa-hoc" component={Courselist} />
      <Route path="/lien-he" component={Contact} />
      <Route path="/du-an" component={Project} />
      <Route path="/chi-tiet/:slug" component={Detail} />
      <Route path="/" exact component={Home} />
      <Route component={Page404} />
    </Switch>

    <Footer />
  </AppProvider>;
  // return <Register />;

}

export default App;




/**
 * delayLink:
 * không hiệu ứng khi link đích ở trang hiện tại
 * Loading dữ liệu rồi mới tắt hiệu ứng : để thêm biểu tượng login ở giữa cho sinh động, có thể sử dụng function để gọi khi loading xong
 *
 * useLocalState, useSessionState, useIndexDBState
 */
