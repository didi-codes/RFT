import Head from 'next/head';
import Nav from '../components/nav'
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Contact Ramonita For Fitness Training Consultation
        </title>
        <meta name='description' content='Get Healthy and In Shape' />
      </Head>
      <Nav />
    </div>
  );
}
