import Head from 'next/head';
import Nav from '../components/nav'
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Meet Ramonita Perez Fitness Instructor
        </title>
        <meta name='description' content='Get Healthy and In Shape' />
      </Head>
      <Nav />
    </div>
  );
}
