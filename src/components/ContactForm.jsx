import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState('');

  // Function to validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate inputs and set error messages
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email address';
    if (!message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    // If no errors, send the email
    if (Object.keys(newErrors).length === 0) {
      const templateParams = {
        name,
        email,
        message,
        to_email: 'info@greenpipeanalytics.com', // Ensure this matches your EmailJS template
      };

      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID from environment variables
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID from environment variables
          templateParams,
          process.env.REACT_APP_EMAILJS_USER_ID // User ID (public key) from environment variables
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setFormStatus('Form submitted successfully!');
            setName('');
            setEmail('');
            setMessage('');
          },
          (err) => {
            console.log('FAILED...', err);
            setFormStatus('Failed to send the form. Please try again.');
          }
        );
    }
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby='name-error'
        />
        {errors.name && (
          <span id='name-error' className='error'>
            {errors.name}
          </span>
        )}
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby='email-error'
        />
        {errors.email && (
          <span id='email-error' className='error'>
            {errors.email}
          </span>
        )}
      </div>
      <div className='form-group'>
        <label htmlFor='message'>Message:</label>
        <textarea
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby='message-error'
        ></textarea>
        {errors.message && (
          <span id='message-error' className='error'>
            {errors.message}
          </span>
        )}
      </div>
      <button type='submit'>Submit</button>
      {formStatus && (
        <p className='form-status' aria-live='polite'>
          {formStatus}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
