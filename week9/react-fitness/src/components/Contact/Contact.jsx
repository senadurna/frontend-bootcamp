import './Contact.css';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <h2>CONTACT US</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Your Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
