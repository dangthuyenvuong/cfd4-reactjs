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
import Loading from './components/Loading';
import CourseList from './pages/home/components/CourseList';
import Team from './pages/team';

function App() {
  return <BrowserRouter>
    <Header />
    <Loading />
    <Switch>
      <Route path="/thong-tin-ca-nhan" component={Profile} />
      <Route path="/dang-ky" component={Register} />
      <Route path="/team" component={Team} />
      <Route path="/khoa-hoc" component={CourseList} />
      <Route path="/lien-he" component={Contact} />
      <Route path="/du-an" component={Project} />
      <Route path="/chi-tiet/:id" component={Detail} />
      <Route path="/" exact component={Home} />
      <Route component={Page404} />
    </Switch>

    <Footer />
  </BrowserRouter>;
  // return <Register />;

}

export default App;
