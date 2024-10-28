import { useState } from 'react';
import '../styles/Form.css';


// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';
import { Form } from 'react-router-dom';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  // TODO: Create a password variable and a function "setPassword" using useState
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Please enter a valid Email Address and Name');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkMessage(message)) {
      setErrorMessage(
        `Please write a message to send`
      );
      return;
    }

    // If successful, we want to clear out the input after registration.
    setUserName('');
    // TODO: Set the password back to an empty string after the user clicks submit
    setMesssage('');
    setErrorMessage(false);
    setEmail('');
    alert(`Hello ${userName}`);
  };

  return (
    <div className="body">
      <h2>Contact Us</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Type your message here"
        />
        <br />  
        <button type="submit">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <p>Email Address: christopher.m.groth@gmail.com</p>
    </div>
  );
}

export default Contact;