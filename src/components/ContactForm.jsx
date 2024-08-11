import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';

function ContactForm() {
  // State variables to manage form inputs and errors
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
      };

      emailjs
        .send(
          'service_fe67v65', // Replace with your EmailJS service ID
          'template_ilwbozg', // Replace with your EmailJS template ID
          templateParams,
          'YGdiPj8hHI1ngqYJlx' // Replace with your EmailJS user ID (public key)
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
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => !name && setErrors({ ...errors, name: 'Name is required' })}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => {
            if (!email) setErrors({ ...errors, email: 'Email is required' });
            else if (!validateEmail(email)) setErrors({ ...errors, email: 'Invalid email address' });
          }}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => !message && setErrors({ ...errors, message: 'Message is required' })}
        ></textarea>
        {errors.message && <span>{errors.message}</span>}
      </div>
      <button type="submit">Submit</button>
      {formStatus && <p>{formStatus}</p>}
    </form>
  );
}

export default ContactForm;
