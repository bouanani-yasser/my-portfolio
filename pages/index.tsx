import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/UI/nav';
import Hi from '../components/Hi';

import GridCard from '../components/GridCards';
import Contact from '../components/Contact';

const Home: NextPage = () => {
   return (
      <div className=" bg-base-200 min-h-screen relative ">
         <Head>
            <title>Yasser Bouanani</title>
            <meta name="description" content="Welcome to my portfolio" />
         </Head>
         <Nav>
            <>
               <Hi />
               <div className="works md:px-24 mt-20" id="works">
                  <h1 className="m-6 p-4 z-10 font-bold  text-2xl text-base-100 relative ">
                     <span className="text-secondary">Some</span> Works
                     <span className="rounded-box rotate-6 w-20 absolute left-0 top-0 -z-10 h-full bg-base-100"></span>
                  </h1>
                  <GridCard />
               </div>
               <Contact />
            </>
         </Nav>
      </div>
   );
};

export default Home;
