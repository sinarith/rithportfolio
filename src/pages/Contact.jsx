import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.scss';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    alert('Message sent successfully!');
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Your Name" {...register('name', { required: true })} />
        {errors.name && <span className="error">Name is required</span>}

        <input type="email" placeholder="Your Email" {...register('email', { required: true })} />
        {errors.email && <span className="error">Email is required</span>}

        <textarea placeholder="Your Message" {...register('message', { required: true })}></textarea>
        {errors.message && <span className="error">Message is required</span>}

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
