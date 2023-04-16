import React from 'react';
import EmpTracker from './../../Assets/images/Employee-Tracker.png';
import JateApp from './../../Assets/images/JATE-App.png';
import OrigPortfolio from './../../Assets/images/Original-Portfolio.png';
import PassGen from './../../Assets/images/PasswordGenerator..png';
import JScriptQuiz from './../../Assets/images/Quiz-Game.png';
import FoodApi from './../../Assets/images/FoodAPIApp.png';
import HappyCamper from './../../Assets/images/Happy Camper.png';

const projects = [
    {
        title: 'Happy Camper Camping App',
        image: HappyCamper,
        deployLink: 'https://happy-camper12345.herokuapp.com/',
        repoLink: 'https://github.com/CBshmear/big-ole-3',
        altTag: 'Happy Camper Camping App',
    },
    {
        title: 'Employee Tracker',
        image: EmpTracker,
        deployLink: 'https://github.com/swmcguire/SQL_Employee_Tracker',
        repoLink: 'https://github.com/swmcguire/SQL_Employee_Tracker',
        altTag: 'Employee Tracker App',
    },
    {
        title: 'JATE App',
        image: JateApp,
        deployLink: 'https://calm-sands-43698.herokuapp.com/',
        repoLink: 'https://github.com/swmcguire/PWA-TextEditor',
        altTag: 'JATE Persistence Text App',
    },
    {
        title: 'Original html Portfolio',
        image: OrigPortfolio,
        deployLink: ' https://swmcguire.github.io/Challenge-2/',
        repoLink: 'https://github.com/swmcguire/Challenge-2',
        altTag: 'Original Portfolio',
    },
    {    
        title: 'Password Generator',
        image: PassGen,
        deployLink: 'https://swmcguire.github.io/Password-Generator/',
        repoLink: 'https://github.com/swmcguire/Password-Generator',
        altTag: 'Password Generator',
    },
    {
        title: 'JavaScript Quiz Game',
        image: JScriptQuiz,
        deployLink: 'https://swmcguire.github.io/Code-Quiz-Game/',
        repoLink: 'https://github.com/swmcguire/Code-Quiz-Game',
        altTag: 'JavaScript Quiz Game',
    },
    {
        title: 'Recipe Randomizer API App',
        image: FoodApi,
        deployLink: 'https://wir3s.github.io/eat-drink-be-merry/',
        repoLink: 'https://github.com/swmcguire/eat-drink-be-merry',
        altTag: 'Recipe API Generator',
    },
]

function Portfolio() {
    return (
        <div>
            {projects.map((proj) => (

                <article>
                    <h3>{proj.title}</h3>
                    <div>
                        <img
                            src={proj.image}
                            alt={proj.altTag}
                        />
                        <a href={proj.repoLink}>
                            <button>
                                GitHub Repository
                            </button>
                        </a>
                        <a href={proj.deployLink}>
                            <button>
                                Deployed Site
                            </button>
                        </a>

                    </div>
                </article>


            ))}

        </div>
    )
}


export default Portfolio;