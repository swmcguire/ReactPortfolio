//----------------- Importing React
import React from 'react';
//----------------- Importing all the components that will be used below in the App Function
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
    return (
        //------------------- Will put style-ized classes in className (ClassName is the same as Class)

         <div> 
            <Header />
            <PortfolioContainer />
            <Footer />
        </div>
    )
}

//-------------- This need to export the default function above
export default App;