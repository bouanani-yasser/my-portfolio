import { FC } from 'react';
import Image from 'next/image';

const Hi: FC = () => {
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
               fill-opacity="1"
               d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,176C672,192,768,192,864,186.7C960,181,1056,171,1152,192C1248,213,1344,267,1392,293.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
         </svg>
         <div className="mx-[10%] my-[50px] h-fit max-w-[80%]">
            <div className="flex-1 px-24 py-2">
               <div className="text-7xl text-left  leading-relaxed font-bold ...">
                  <h1 className="text-7xl ">Hi, I am</h1>
                  <div
                     className="bg-1 title-gradient "
                     style={{ fontSize: 'clamp(40px, 8vw, 80px)' }}
                  >
                     Yasser Bouanani
                  </div>
                  <div
                     className=" bg-2 title-gradient"
                     style={{ fontSize: 'clamp(20px, 8vw, 50px)' }}
                  >
                     A Software Engineer & Fullstack Developer{' '}
                  </div>
               </div>
            </div>
            <div className="mx-[5%] font-bold text-3xl">
               <button className="text-white m-10 w-64 p-4 bg-gradient-to-r from-[#3b89d7] to-[#2de5eb]  drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)] ">
                  Contact me
               </button>
               <button className="text-[#ff0080] m-10 w-64 p-4 border-solid border-4 border-[#ff0080]">
                  Works
               </button>
            </div>
         </div>
      </>
   );
};

export default Hi;
