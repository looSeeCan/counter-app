import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counters from "./components/counters";
import Counters1 from './components/counters1';
import "bootstrap/dist/css/bootstrap.css"; /// installed this in the begining of the course. 2-Setting Up the Project



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counters />
    <br />
    <br />
    <br />
    <Counters1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
