import React from 'react';
import SeanResume from './../../Assets/SeanMcGuireResume.docx'

function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <p>Below is my resume with my past employment experience.  Please take a look and if you have any questions feel free to reach out on the Contacts tab.</p>
            <a href={SeanResume} Download='SeanMcGuireResume.docx'>Download Sean's Resume</a>
            <br></br>
            <h2>Sean's Proficiencies</h2>
            <ul>
                <li>SQL</li>
                <li>Node.js</li>
                <li>React</li>
                <li>REST APIs</li>
                <li>HTML</li>
                <li>Command Line Prompts</li>
            </ul>
        </div>
    );
}

export default Resume;