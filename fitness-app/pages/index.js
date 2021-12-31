import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ramonita Perez Fitness Instructor</title>
        <meta name="description" content="Get Healthy and In Shape" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.topNavContainer}>
        <div className={styles.socialMedia}>
          <a href="">
          <img src="images/instagram.png" alt="instagram-logo" />
          </a>
        </div>
      </div>
      <div className={styles.navigationContainer}>
        <div className={styles.logo}>
        <img src="images/rftlogowhitefig.png" alt="woman running" />
        </div>
        <nav className={styles.navigation}>
          <a href=''>Home</a>
          <a href=''>About</a>
          <a href=''>Blog</a>
          <a href=''>Contact</a>
        </nav>
      </div>
    </div>
  );
}
