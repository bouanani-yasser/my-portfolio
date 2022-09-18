import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/UI/nav';

const Home: NextPage = () => {
   return (
      <div className="bg-gray-700 min-h-screen">
         <Head>
            <title>Yasser Bouanani</title>
            <meta name="description" content="Welcome to my portfolio" />
         </Head>
         <Nav />
         <main className=""></main>
      </div>
   );
};

export default Home;
