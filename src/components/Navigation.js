//----------------- Importing React
import React from 'react';


//-------------Can store css styles as variables and pass in see line 12 and 6
//const styleType = { border: '1px black', padding: '5px'} 

function Navigation({ currentPage, handlePageChange }) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <h1>Sean McGuire</h1>
                    </li>
                    <li >
                        <a
                            href='#about'
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >About Me
                        </a>
                    </li>
                    <li >
                        <a
                            href='#portfolio'
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >Portfolio</a>
                    </li>
                    <li >
                        <a
                            href='#resume'
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >Resume</a>
                    </li>
                    <li >
                        <a
                            href='#contact'
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >Contact</a>
                    </li>
                </ul>

            </nav>
        </div>
    );
}

export default Navigation;