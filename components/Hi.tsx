import { FC } from 'react';
import Image from 'next/image';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { SiFreelancer } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';

const Hi: FC = () => {
   return (
      <div className="flex flex-col justify-around items-start m-auto mt-[10%] h-fit max-w-[80%] sm:flex-row">
         <div className="flex-1 px-24 py-5">
            <div className="text-5xl font-extrabold ...">
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  Hi, I am Yasser a fullstack software developer
               </span>
            </div>
         </div>
         <div className="flex flex-1 self-center  justify-center">
            <Image
               className="rounded-full"
               src="/yasser.png"
               alt="Picture of the author"
               width={350}
               height={350}
               priority
            />
         </div>
         <div className="sm:order-first">
            <ul className="flex flex-row  justify-center items-center  sm:flex-col">
               <li>
                  <BsTwitter className="my-icon" />
               </li>
               <li>
                  <BsLinkedin className="my-icon" />
               </li>
               <li>
                  <SiFreelancer className="my-icon fr" />
               </li>
               <li>
                  <BsGithub className="my-icon" />
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Hi;
