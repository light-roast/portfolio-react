import { useForm, ValidationError } from '@formspree/react';
import styles from './Contact.module.css'

function Contact() {
  const [state, handleSubmit] = useForm("xgejgbok");
  console.log("State:", state);
  if (state.succeeded) {
      return <p className={styles.successMessage}>Thank you for contacting me. I will be replying soon to the email you provided.</p>
  }
  return (
      <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor='name' className={styles.label}>Name</label>
      <input
        id="name"
        type="text"
        name="name">
      </input>
      <label htmlFor="email" className={styles.label}>
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="subject" className={styles.label}>Subject</label>
      <input
      id="subject"
      type="text" 
      name="subject">
      </input>
      <label>Message:</label>
      <textarea
        id="message"
        name="message"
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
  );
}

export default Contact;