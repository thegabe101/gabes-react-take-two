//here we will create our primary app drawer
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
//in case we want to use bootstrap later, will import 
//import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

      </Router>
      <Footer />
    </div>
  )
}


























































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


