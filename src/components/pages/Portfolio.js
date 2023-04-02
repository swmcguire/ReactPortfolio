import React from 'react';
import EmpTracker from './../../Assets/images/Employee-Tracker.png';
import JateApp from './../../Assets/images/JATE-App.png';
import OrigPortfolio from './../../Assets/images/Original-Portfolio.png';
import PassGen from './../../Assets/images/PasswordGenerator..png';
import JScriptQuiz from './../../Assets/images/Quiz-Game.png';
import FoodApi from './../../Assets/images/FoodAPIApp.png';

const projects = [
    {
        title: 'Employee Tracker',
        image: EmpTracker,
        deployLink: 'No Link Available',
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
        deployLink: 'https://swmcguire.github.io/Challenge-3/',
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
        <article>
        <h1> </h1>
        <div>
            <img
                src={require('./../../Assets/images/Employee-Tracker.png')}
                alt='Employee Tracker App'

            />
        </div>
    </article>
    )
}



export default Portfolio;