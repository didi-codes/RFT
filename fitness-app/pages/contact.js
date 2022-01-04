import Head from 'next/head';
import Nav from '../components/nav';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Ramonita For Fitness Training Consultation</title>
        <meta name='description' content='Get Healthy and In Shape' />
      </Head>
      <Nav />
      <div className={styles.formContainer}>
        <div className={styles.formText}>
          <h1 className={styles.formTitle}>
            Looking To Start Your Fitness Journey
          </h1>
          <h2 className={styles.formSubtitle}>
            Contact Me To Begin, Thank You For Reaching Out!
          </h2>
        </div>
        <form className={styles.contact} action=''>
          <div className={styles.nameContainer}>
            <label htmlFor='first-name'>First Name:</label>
            <input
              name='first-name'
              type='text'
              autoComplete='name'
              placeholder='Required*'
              required
            />
             <label htmlFor='last-name'>Last Name</label>
            <input
              name='last-name'
              type='text'
              autoComplete='name'
              placeholder='Required*'
              required
            />
             <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              autoComplete='email'
              placeholder='Required*'
              required
            />
             <label htmlFor='phone'>Phone</label>
            <input
              name='phone'
              type='text'
              autoComplete='phone'
              placeholder='Required*'
              required
            />
             <label htmlFor='last-name'>Last Name:</label>
            <input
              name='last-name'
              type='text'
              autoComplete='name'
              placeholder='Required*'
              required
            />
             <label htmlFor='message'>Message</label>
            <input
              name='message'
              type='text'
              autoComplete='message'
              placeholder='Let Me Know Briefly What I can Help You With'
              required
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
