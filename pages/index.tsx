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
               <div className="works">
                  <h1 className="m-10 p-2 z-10 font-bold  text-3xl text-primary border-solid border-primary  border-l-4">
                     My Works
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
