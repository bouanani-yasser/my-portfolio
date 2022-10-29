import { FC } from 'react';
import Image from 'next/image';

const Hi: FC = () => {
   return (
      <div className="mx-[10%] h-fit max-w-[80%]">
         <div className="flex-1 px-24 py-5">
            <div className="text-3xl  leading-relaxed font-bold ...">
               <h1>Hi, I am</h1>
               <div
                  className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  leading-relaxed "
                  style={{ fontSize: 'clamp(40px, 8vw, 80px)' }}
               >
                  Yasser Bouanani
               </div>
               <div style={{ fontSize: 'clamp(20px, 8vw, 50px)' }}>
                  A Software Engineer & Fullstack Developer{' '}
               </div>
            </div>
         </div>
         {/* <div className="flex flex-1 self-center  justify-center">
            <Image
               className="rounded-full"
               src="/yasser.png"
               alt="Picture of the author"
               width={350}
               height={350}
               priority
            />
         </div> */}
      </div>
   );
};

export default Hi;
