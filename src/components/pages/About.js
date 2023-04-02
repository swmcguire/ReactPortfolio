import React from 'react';
import weddingImg from './../../Assets/images/Wedding.png';

function About() {
    return (
        <div>
            <h1>About Page</h1>
            <img src={weddingImg} alt="Wedding Champagne with Wife" class="hero"></img>
            <p>My name is Sean McGuire.  I am currently an implementation consultant for a live benchmarking software for legal entities.  I work with SQL to create queries and custom scripts for clients to help them run their day to days more efficiently.  I am currently in the Fullstack Developer Program through the University of Minnesota.  Once complete, I am hoping to take my new found skills and dive into the backend of the software I work on.  This will help to solidify and use the skills I've learned in my day to day role.
                <br></br>
                <br></br>
                Once I have a more "real world" grasp of the coding I've learned I hope to transition into a new product or a new line of work.
                <br></br>
                <br></br>
                Please take a look at my portfolio and reach out if you have any questions!
            </p>
        </div>
    );
}

export default About;