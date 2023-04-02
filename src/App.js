//----------------- Importing React
import React from 'react';
//----------------- Importing all the components that will be used below in the App Function
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
    return (
        //------------------- Will put style-ized classes in className (ClassName is the same as Class)

         <div> 
            <Header />
            <Navigation />
            <Project />
            <Footer />
        </div>
    )
}

//-------------- This need to export the default function above
export default App;