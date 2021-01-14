import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Detail from './pages/detail';
import Register from './pages/register';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './pages/project';
import Profile from './pages/profile';
import Demo from './pages/demo';
import PopupLogin from './components/PopupLogin';

function App() {
  return <>
    <Header />
    {/* <Profile /> */}
    <Home />
    {/* <Detail /> */}
    <Footer />
  </>;
  // return <Register />;

}

export default App;
