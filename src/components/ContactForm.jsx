import React, { useState } from 'react';
import '../assets/styles/ContactForm.css';

function ContactForm() {
  // State variables to manage form inputs and errors
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

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

    // If no errors, display success message
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
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
    </form>
  );
}

export default ContactForm;
