import React, { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' });
    navigate('/home');
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Have questions? We’re here to help!</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-floating">
            <input
            className={`form-control bg-light rounded-3`}
            type="text"
            name="name"
            id='t1'
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="#t1">Your Name</label>
          </div>
          <div className="form-floating">
            <input
            type="email"
            className={`form-control bg-light rounded-3`}
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="">Email</label>
          </div>
          <div className="form-floating">
            <textarea
            name="message"
            placeholder="Your Message"
            id='t3'
            className={`form-control bg-light rounded-3`}
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <label htmlFor="#t3">Your Message</label>
          </div>
          
          <button className='btn btn-outline-danger w-100' type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;