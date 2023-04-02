//----------------- Importing React
import React from 'react';
//----------------- Importing React
import ReactDOM from 'react-dom';
//----------------- This is our Application - the entire application
import App from './App';


//---------------- Will need to import css file/ boot straps/ tailwinds etc to style-ize


//----------------- We are using ReactDOM.render to put our entire app in a document with the dev/id of root
ReactDOM.render(<App />, document.getElementById('root'));