import { FC } from 'react';
import { motion } from 'framer-motion';

import { BsTwitter } from 'react-icons/bs';
import { TbBrandLinkedin } from 'react-icons/tb';
import { SiFreelancer } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';
import { ImWhatsapp } from 'react-icons/im';

const Hi: FC = () => {
   const container = {
      hidden: { opacity: 0, x: -40 },
      show: {
         opacity: 1,
         x: 0,
         transition: {
            staggerChildren: 0.5,
            default: { ease: 'linear' },
         },
      },
   };

   const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
   };
   const actionsItem = {
      hidden: { opacity: 0, y: 40 },
      show: { opacity: 1, y: 0 },
   };

   return (
      <div className="relative pt-10 bg-gradient-to-br from-base-300 to-secondary text-primary-content h-[100vh]">
         <motion.div
            className="mx-[10%] py-[3%]  max-w-[80%]"
            variants={container}
            initial="hidden"
            animate="show"
         >
            <div className="flex-1 px-24 py-2">
               <div className="text-4xl text-left text-secondary  leading-relaxed font-bold ...">
                  <motion.h1 variants={item} className="text-5xl ">
                     Hi, I am
                  </motion.h1>
                  <motion.div
                     variants={item}
                     className="bg-1 title-gradient  "
                     style={{
                        fontSize: 'clamp(40px, 8vw, 80px)',
                        background: 'var(primary)',
                     }}
                  >
                     Yasser Bouanani
                  </motion.div>
                  <motion.div
                     variants={item}
                     className=" bg-2 title-gradient"
                     style={{ fontSize: 'clamp(20px, 8vw, 50px)' }}
                  >
                     Software Engineer & Fullstack Developer
                  </motion.div>
               </div>
            </div>
            <div className="mt-4 flex flex-1 justify-center space-x-2 lg:mt-6 lg:ml-24 lg:justify-start">
               <motion.button
                  variants={actionsItem}
                  className="z-10 btn btn-ghost btn-active lg:btn-lg normal-case"
               >
                  Contact me
               </motion.button>
               <motion.button
                  variants={actionsItem}
                  className="z-10 btn lg:btn-lg normal-case"
               >
                  Works
               </motion.button>
            </div>
         </motion.div>
         <svg
            className=" absolute -bottom-20 z-1 fill-secondary col-start-1 row-start-1 h-auto w-full"
            width="1600"
            height="595"
            viewBox="0 0 1600 595"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"></path>
         </svg>
         <div className="absolute top-20 left-[5%]">
            <ul className="flex flex-col  justify-center items-center">
               <li>
                  <BsTwitter className="my-icon" />
               </li>
               <li>
                  <TbBrandLinkedin className="my-icon" />
               </li>
               <li>
                  <SiFreelancer className="my-icon fr" />
               </li>
               <li>
                  <VscGithub className="my-icon" />
               </li>
               <li>
                  <ImWhatsapp className="my-icon" />
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Hi;
