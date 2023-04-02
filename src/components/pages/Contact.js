import React, { useState } from 'react';
import { validateEmail } from './../../utils/helpers';

const styles = {
    form: {
        margin: 20,
    },
        formInput: {
            marginTop: 5,
            marginBottom: 5 
    },

}




function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else { setMessage(inputValue); }
        console.log(name);
        console.log(email);
        console.log(message);
    };

        const handleFormSubmit = (e) => {
            e.preventDefault();

        if (!email || !name || !message) {
            setErrorMessage('Please fill out all the fields!')
            return;
        }

        alert(`Thank you for your inquiry ${name}`);

        setName('');
        setEmail('');
        setMessage('');

    };

    return (
        <div>
            <h1>Contact Page</h1>

            <form className="form">

                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="E-mail"
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>

    );
}

export default Contact;