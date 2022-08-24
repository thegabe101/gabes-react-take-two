import './App.css';
import Header from './components/Header';
import image1 from './images/20200604_113716.jpg';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Contact from './components/Contact';
// import { BrowserRouter, Route, Router } from 'react-router-dom';

function App(props) {
  // const isAboutMe = props.isAboutMe

  return (
    <div className='primaryDiv'>
      {/* <Router> */}
      <Header />
      <figure className="banner">
        <img className="banner-img" src={image1} style={{ height: 50 }} />
      </figure>
      <AboutMe />
      {/* <Route path="/contact"> */}
      {/* <Contact /> */}
      {/* </Route> */}
      <Footer />
      {/* </Router> */}

    </div>

  );
}

export default App;
