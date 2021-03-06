import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/UI/nav';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
   return (
      <div className={styles.container}>
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Nav color="red" />
         <main className={styles.main}></main>
      </div>
   );
};

export default Home;
