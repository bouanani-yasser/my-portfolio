import { FC } from 'react';

import { TbBrandLinkedin } from 'react-icons/tb';
import { SiFreelancer } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';
import { ImWhatsapp } from 'react-icons/im';

interface ContactProps {}

const Contact: FC<ContactProps> = () => (
   <section className="w-full max-w-2xl px-6 py-4 mx-auto my-20 rounded-lg shadow-md dark:bg-slate-900">
      <h2 className="text-3xl font-semibold text-center ">Get in touch</h2>

      <p className="mt-3 text-center text-gray-600 dark:text-gray-400">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>

      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
         <a
            href="#"
            className="flex flex-col items-center px-4 py-3  transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
         >
            <svg
               className="w-5 h-5"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
            >
               <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
               />
            </svg>

            <span className="mt-2">Jijel,Algeria</span>
         </a>

         <a
            href="#"
            className="flex flex-col items-center px-4 py-3  transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
         >
            <svg
               className="w-5 h-5"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
            >
               <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>

            <span className="mt-2">+213669588289</span>
         </a>

         <a
            href="mailto:hi@yasar.us"
            className="flex flex-col items-center px-4 py-3  transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
         >
            <svg
               className="w-5 h-5"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
            >
               <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
               <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="mt-2">hi@yassar.us</span>
         </a>
      </div>
      <div className="mx-auto flex">
         <ul className="list-none m-10 flex mx-auto space-x-10">
            <li>
               <ImWhatsapp className="text-neutral w-10 h-10 bg-slate-300 rounded-md" />
            </li>
            <li>
               <VscGithub className="text-neutral w-10 h-10 bg-slate-300 rounded-md" />
            </li>

            <li>
               <TbBrandLinkedin className="text-neutral w-10 h-10 bg-slate-300 rounded-md" />
            </li>
            <li>
               <SiFreelancer className="text-neutral w-10 h-10 bg-slate-300 rounded-md" />
            </li>
         </ul>
      </div>
   </section>
);

export default Contact;
