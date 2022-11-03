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
      <>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute -top-10 left-0 -z-10"
         >
            <defs>
               <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                     offset="0%"
                     style={{ stopColor: '#3b89d7', stopOpacity: 1 }}
                  />
                  <stop
                     offset="100%"
                     style={{ stopColor: '#2de5eb', stopOpacity: 1 }}
                  />
               </linearGradient>
            </defs>
            <path
               fill="url(#grad)"
               fillOpacity="1"
               d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,176C672,192,768,192,864,186.7C960,181,1056,171,1152,192C1248,213,1344,267,1392,293.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
         </svg>
         <motion.div
            className="mx-[10%] my-[50px] h-[100vh]  max-w-[80%]"
            variants={container}
            initial="hidden"
            animate="show"
         >
            <div className="flex-1 px-24 py-2">
               <div className="text-4xl text-left  leading-relaxed font-bold ...">
                  <motion.h1 variants={item} className="text-5xl ">
                     Hi, I am
                  </motion.h1>
                  <motion.div
                     variants={item}
                     className="bg-1 title-gradient "
                     style={{ fontSize: 'clamp(40px, 8vw, 80px)' }}
                  >
                     Yasser Bouanani
                  </motion.div>
                  <motion.div
                     variants={item}
                     className=" bg-2 title-gradient"
                     style={{ fontSize: 'clamp(20px, 8vw, 50px)' }}
                  >
                     A Software Engineer & Fullstack Developer
                  </motion.div>
               </div>
            </div>
            <div className="mx-[5%] font-bold text-3xl">
               <motion.button
                  variants={actionsItem}
                  className="text-white rounded-lg m-10 w-64 p-4 bg-gradient-to-r from-[#3b89d7] to-[#2de5eb]  drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)] "
               >
                  Contact me
               </motion.button>
               <motion.button
                  variants={actionsItem}
                  className="text-[#ff0080] rounded-lg m-10 w-64 p-4 border-solid border-4 border-[#ff0080]"
               >
                  Works
               </motion.button>
            </div>
         </motion.div>
      </>
   );
};

export default Hi;
