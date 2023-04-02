//----------------- Importing React
import React from 'react';
//----------------- Importing all the components that will be used below in the App Function
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
    return (
        //------------------- Will put style-ized classes in className
        //--------------- ____A_____ will call the different components from 'Components'
         <div className= " "> 
            <Header />
            <Navigation />
            <Project />
            <Footer />
        </div>
    )
}

export default App;