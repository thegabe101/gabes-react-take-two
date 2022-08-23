import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//choosing to try to import a service worker here to see if i will be able to get developed portfolio to work offline
import registerServiceWorker from './registerServiceWorker.js';
// import reportWebVitals from './reportWebVitals';
// the logic for this service worker will be imported from a separate js file within this folder
// I found the logic for this file in the create-react-app.dev docs; they have detailed documentation about service workers on this page: https://create-react-app.dev/docs/making-a-progressive-web-app/
// Their docs link to this page: https://github.com/cra-template/pwa/blob/main/packages/cra-template-pwa/template/src/serviceWorkerRegistration.js
// The second link contains the documentation, explanation of, and logic for the service worker

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerServiceWorker();


//taking out the web vitals for this project. might reinstitute later. 
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
