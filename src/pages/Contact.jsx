import { useState } from 'react';
import '../styles/Form.css';



import { validateEmail } from '../utils/helpers';
import { Form } from 'react-router-dom';

function Contact() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Please enter a valid Email Address and Name');
      return;
    }
    if (!checkMessage(message)) {
      setErrorMessage(
        `Please write a message to send`
      );
      return;
    }

    setUserName('');
    setMesssage('');
    setErrorMessage(false);
    setEmail('');
    alert(`Hello ${userName}`);
  };

  return (
    <div className="body" style={{minHeight: "calc(100vh - 270px)"}}>
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