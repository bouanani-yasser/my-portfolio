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
      <div className="relative pt-10 bg-gradient-to-br from-base-200 dark:from-slate-900 to-secondary text-primary-content h-[100vh]">
         <motion.div
            className="mx-[5%] py-[3%]  max-w-[80%]"
            variants={container}
            initial="hidden"
            animate="show"
         >
            <div className="flex-1 px-24 py-2">
               <div className="text-xl text-primary-content text-left   leading-relaxed font-bold ...">
                  <motion.h1 variants={item} className=" ">
                     Hi, I am
                  </motion.h1>
                  <motion.div
                     variants={item}
                     className="bg-1 title-gradient  "
                     style={{
                        fontSize: 'clamp(30px, 8vw, 50px)',
                        background: 'var(primary)',
                     }}
                  >
                     Yasser Bouanani
                  </motion.div>
                  <motion.div
                     variants={item}
                     className=" bg-2 title-gradient"
                     style={{ fontSize: 'clamp(20px, 8vw, 30px)' }}
                  >
                     A Software Engineer & Fullstack Developer
                  </motion.div>
                  <div className="flex w-full flex-col items-center space-y-10 lg:flex-row lg:items-start lg:space-x-4 lg:space-y-0">
                     <div className="my-2 flex max-w-sm flex-col gap-2 text-left">
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
            <div className="mt-4 flex flex-1 justify-center space-x-2 lg:mt-6 lg:ml-24 lg:justify-start">
               <motion.button
                  variants={actionsItem}
                  className="z-10 btn btn-outline  lg:btn-lg normal-case"
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
            className=" dark:fill-slate-700 absolute -bottom-20 z-1 fill-secondary col-start-1 row-start-1 h-auto w-full"
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
