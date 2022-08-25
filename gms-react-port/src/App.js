import './App.css';
import Header from './components/Header';
import image1 from './images/20200604_113716.jpg';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';


//here is our test-working app export function
export default function App() {
  const [fakePeople, setFakePeople] = useState([{
    name: "Bob",
    email: "Bob@gmail.com",
    message: "Hi Gabe, I'd love to work with you!"
  },{
    name: "Tom",
    email: "Tom@gmail.com",
    message: "Hey, let me know if you would like to work together!"
  }, {
    name: "Lucy",
    email: "Lucy@gmail.com",
    message: "Wow! I love your work!"
  }])

  const addContactInfo = contactObj => {
    setFakePeople([...fakePeople, contactObj])
  }

  return (
    <div className='primaryDiv'>
      <Header />
      <figure className='banner'>
        <img className="banner-img" src={image1} style={{ height: 50 }} />
      </figure>
      <AboutMe />
      <Footer />
    </div>
  );
};








// function App(props) {
//   // const isAboutMe = props.isAboutMe

//   return (
//     <div className='primaryDiv'>
//       {/* <Router> */}
//       <Header />
//       <figure className="banner">
//         <img className="banner-img" src={image1} style={{ height: 50 }} />
//       </figure>
//       <AboutMe />
//       {/* <Route path="/contact"> */}
//       {/* <Contact /> */}
//       {/* </Route> */}
//       <Footer />
//       {/* </Router> */}

//     </div>

//   );
// }




// const App = () => {

//   return (
//     <Router>
//       <Routes>
//         <Route path="/aboutme" element={<AboutMe />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   )
// }

// export default function App() {
//   return (
//     <div>
//       <h1>Bookkeeper</h1>
//       <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem",
//         }}
//       >
//         <Link to="/invoices">Invoices</Link> |{" "}
//         <Link to="/expenses">Expenses</Link>
//       </nav>
//     </div>
//   );
// }



