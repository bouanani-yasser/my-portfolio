import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/UI/nav';
import Hi from '../components/Hi';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

const Home: NextPage = () => {
   return (
      <div className=" bg-white min-h-screen relative ">
         <Head>
            <title>Yasser Bouanani</title>
            <meta name="description" content="Welcome to my portfolio" />
         </Head>
         <Nav />
         <Hi />
      </div>
   );
};

export default Home;
