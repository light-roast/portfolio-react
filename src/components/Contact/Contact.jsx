import { useForm, ValidationError } from '@formspree/react';
import styles from './Contact.module.css'
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Contact({setNavLink}) {
  const [state, handleSubmit] = useForm("xgejgbok");
  useEffect(() => {
    setNavLink('contact')
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
  if (state.succeeded) {
      return <p className={styles.successMessage}>Thank you for contacting me. I will be replying soon to the email you provided.</p>
  }
  return (
    <>
      <h2 className={styles.contact}>Contact me!</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
       <label htmlFor='name' className={styles.label}>Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        required>
      </input>
      <label htmlFor="email" className={styles.label}>
        Email Address:
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="subject" className={styles.label}>Subject:</label>
      <input
      id="subject"
      type="text" 
      name="subject">
      </input>
      <label className={styles.label}>Message:</label>
      <textarea
        id="message"
        name="message"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </>
  );
}

Contact.propTypes = {
  setNavLink: PropTypes.func.isRequired,
};


export default Contact;