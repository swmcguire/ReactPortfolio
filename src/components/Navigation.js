//----------------- Importing React
import React from 'react';


//-------------Can store css styles as variables and pass in see line 12 and 6
//const styleType = { border: '1px black', padding: '5px'} 

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <a href='#'>Sean McGuire</a>
                </li>
                <li >
                    <a href='#'>About Me</a>
                </li>
                <li >
                    <a href='#'>Portfolio</a>
                </li>
                <li >
                    <a href='#'>Resume</a>
                </li>
                <li >
                    <a href='#'>Contact</a>
                </li>
            </ul>

        </nav>

    );
}

export default Navigation;