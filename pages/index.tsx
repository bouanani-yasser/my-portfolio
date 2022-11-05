import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/UI/nav';
import Hi from '../components/Hi';

import GridCard from '../components/GridCards';
import Contact from '../components/Contact';

const Home: NextPage = () => {
   return (
      <div className=" dark:bg-slate-900 bg-white min-h-screen relative ">
         <Head>
            <title>Yasser Bouanani</title>
            <meta name="description" content="Welcome to my portfolio" />
         </Head>
         <Nav />
         <Hi />

         <div className="works m-10 p-10 ">
            <h1 className="m-10 text-5xl text-[#3b89d7]">#My Works</h1>
            <GridCard />
         </div>
         <Contact />
      </div>
   );
};

export default Home;
