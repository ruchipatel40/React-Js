import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';


// import Router from './Component/Router';
import reportWebVitals from './reportWebVitals';
import Index from './Component/Index';
import Form from './Form/Form';

ReactDOM.render(<Index />,document.getElementById('root'));
// ReactDOM.render(<Form/>,document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
