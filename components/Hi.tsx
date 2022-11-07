import { FC } from 'react';
import { motion } from 'framer-motion';

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
      <div className="relative m-0 pb-64 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 h-[100vh]">
         <motion.div
            className="px-10 py-5 w-full"
            variants={container}
            initial="hidden"
            animate="show"
         >
            <div className="flex-1 md:px-24 py-2 text-3xl">
               <div className="text-left   leading-relaxed font-bold ...">
                  <motion.h1 variants={item} className="">
                     Hi, I am
                  </motion.h1>
                  <motion.div
                     variants={item}
                     className="bg-1 text-3xl md:text-5xl title-gradient  "
                  >
                     Yasser Bouanani
                  </motion.div>
                  <motion.div
                     variants={item}
                     className="text-2xl md:text-4xl my-2 bg-2 title-gradient"
                  >
                     A Software Engineer & Fullstack Developer
                  </motion.div>
                  <div className="flex w-full flex-col text-lg md:text-2xl  space-y-10 lg:flex-row lg:items-start lg:space-x-4 lg:space-y-0">
                     <div className="my-4 flex max-w-sm flex-col gap-2 text-left">
                        <div className="flex items-center g gap-2">
                           <svg
                              width="20"
                              height="20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="inline-block h-6 w-6 stroke-current"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                           </svg>
                           Web & Mobile Development
                        </div>
                        <div className="flex items-center gap-2">
                           <svg
                              width="20"
                              height="20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="inline-block h-6 w-6 stroke-current"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                           </svg>
                           Product design (UX/UI)
                        </div>
                        <div className="flex items-center g gap-2">
                           <svg
                              width="20"
                              height="20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="inline-block h-6 w-6 stroke-current"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                           </svg>
                           Logo design
                        </div>
                        <div className="flex items-center  gap-2">
                           <svg
                              width="20"
                              height="20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="inline-block h-6 w-6 stroke-current"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                           </svg>
                           project management
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="mt-4 flex flex-1 space-x-2 lg:mt-6 md:ml-24 justify-start">
               <motion.button
                  variants={actionsItem}
                  className="z-10 btn  btn-secondary active  lg:btn-lg normal-case"
               >
                  Contact me
               </motion.button>
               <motion.button
                  variants={actionsItem}
                  className="z-10 btn btn-primary btn-outline text-base-200 lg:btn-lg normal-case"
               >
                  Works
               </motion.button>
            </div>
         </motion.div>
         <svg
            className=" dark:fill-slate-800 absolute bottom-[5%] md:bottom-[2%] z-1 fill-secondary col-start-1 row-start-1 h-auto w-full"
            width="1600"
            height="595"
            viewBox="0 0 1600 595"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"></path>
         </svg>
         <svg
            className=" absolute -bottom-16 md:-bottom-[45%] rotate-180 dark:fill-slate-800  z-1 fill-secondary col-start-1 row-start-1 h-auto w-full"
            width="1600"
            height="595"
            viewBox="0 0 1600 595"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"></path>
         </svg>
      </div>
   );
};

export default Hi;
