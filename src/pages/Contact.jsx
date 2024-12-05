import { useState } from 'react';
import emailjs from '@emailjs/browser'; // Install via `npm install @emailjs/browser`
import '../styles/Form.css';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'userName') {
      setUserName(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Please enter a valid Email Address and Name');
      return;
    }
    if (!message) {
      setErrorMessage('Please write a message to send');
      return;
    }

    try {
      // EmailJS Integration
      await emailjs.send(
        'service_v2n40k7', // Replace with your service ID
        'template_g3kd63k', // Replace with your template ID
        { user_email: email, user_name: userName, message },
        'hbsbRA2y4oU1GLXV7' // Replace with your public key
      );
      alert('Message sent successfully!');

      // Clear form fields
      setEmail('');
      setUserName('');
      setMessage('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="body" style={{ minHeight: 'calc(100vh - 270px)' }}>
      <h2>Contact Us</h2>
      <form className="form" id="contact-form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          required
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          required
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Type your message here"
          required
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


// import { useState } from 'react';
// import '../styles/Form.css';



// import { validateEmail } from '../utils/helpers';
// import { Form } from 'react-router-dom';

// function Contact() {

//   const [email, setEmail] = useState('');
//   const [userName, setUserName] = useState('');

//   const [message, setMessage] = useState('');

//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {

//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'userName') {
//       setUserName(inputValue);
//     } else if (inputType === "message") {
//       setMessage(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (!validateEmail(email) || !userName) {
//       setErrorMessage('Please enter a valid Email Address and Name');
//       return;
//     }
//     if (!checkMessage(message)) {
//       setErrorMessage(
//         `Please write a message to send`
//       );
//       return;
//     }

//     setUserName('');
//     setMesssage('');
//     setErrorMessage(false);
//     setEmail('');
//     alert(`Hello ${userName}`);
//   };

//   return (

//     <div className="body" style={{ minHeight: "calc(100vh - 270px)" }}>
//       <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
//       <script type="text/javascript">
//         (function() {
//           // https://dashboard.emailjs.com/admin/account
//           emailjs.init({
//             publicKey: "hbsbRA2y4oU1GLXV7",
//           })
//         })();
//       </script>
//       <script type="text/javascript">
//         window.onload = function() {
//           document.getElementById('contact-form').addEventListener('submit', function (event) {
//             event.preventDefault();
//             // these IDs from the previous steps
//             emailjs.sendForm('contact_service', 'contact_form', this)
//               .then(() => {
//                 console.log('SUCCESS!');
//               }, (error) => {
//                 console.log('FAILED...', error);
//               })
//           })
//         };
//       </script>
//       <h2>Contact Us</h2>
//       <form className="form" id="contact-form" onSubmit={handleFormSubmit}>
//         <input
//           value={email}
//           name="user_email"
//           onChange={handleInputChange}
//           type="email"
//           placeholder="Email"
//         />
//         <input
//           value={user_name}
//           name="user_name"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Name"
//         />
//         <textarea
//           value={message}
//           name="message"
//           onChange={handleInputChange}
//           type="submit"
//           placeholder="Type your message here"
//         />
//         <br />
//         <button type="submit" value="Send">
//           Submit
//         </button>
//       </form>
//       {errorMessage && (
//         <div>
//           <p className="error-text">{errorMessage}</p>
//         </div>
//       )}
//       <p>Email Address: christopher.m.groth@gmail.com</p>
//     </div>
//   );
// }

// export default Contact;