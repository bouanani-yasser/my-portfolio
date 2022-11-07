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
         <Nav />
         <Hi />

         <div className="works relative ">
            <svg
               className=" absolute top-0 rotate-180 dark:fill-slate-700  z-1 fill-secondary col-start-1 row-start-1 h-auto w-full"
               width="1600"
               height="595"
               viewBox="0 0 1600 595"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"></path>
            </svg>
            <h1 className="m-10 z-10 text-5xl text-[#3b89d7]">#My Works</h1>
            <GridCard />
         </div>
         <Contact />
      </div>
   );
};

export default Home;
