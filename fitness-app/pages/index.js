import Head from 'next/head';
import Nav from '../components/nav'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ramonita Perez Fitness Instructor</title>
        <meta name='description' content='Get Healthy and In Shape' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <div className={styles.carousel}>
        <img src="images/kettlebells.jpg" alt="" />
      </div>
    </div>
  );
}
