//make our primary import calls first
import React from 'react';
import ReactDOM from 'react-dom';
// import './styles.css';
import App from './App';
// import Header from './components/Header'


// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <div className='Content'>
//         <p>Header might work...</p>
//       </div>
//     </div>
//   );
// }



//going to render this the 17.0 way since that's what we learned in class.
//it throws an error but still functions perfectly.
ReactDOM.render(<App />, document.getElementById('root'));





































// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
