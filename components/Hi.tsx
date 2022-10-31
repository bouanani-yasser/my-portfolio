import { FC } from 'react';
import Image from 'next/image';

const Hi: FC = () => {
   return (
      <div className="mx-[10%] my-[5%] h-fit max-w-[80%]">
         <div className="flex-1 px-24 py-5">
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
   );
};

export default Hi;
