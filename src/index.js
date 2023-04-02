//----------------- Importing React
import React from 'react';
//----------------- Importing React
import ReactDOM from 'react-dom';
//----------------- This is our Application - the entire application
import App from './App';


//---------------- Importing Bootstraps - we also need a css component as well 
import 'bootstrap/dist/css/bootstrap.min.css';

//---------------- Not sure if I am going to use css file itself but imports here
//import '../styles/Header'


//----------------- We are using ReactDOM.render to put our entire app in a document with the dev/id of root
ReactDOM.render(<App />, document.getElementById('root'));