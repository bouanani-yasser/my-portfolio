import Toggler from './Toggler';
import { useTheme } from 'next-themes';
import { FaPaintBrush } from 'react-icons/fa';
import { TbBrandLinkedin } from 'react-icons/tb';
import { SiFreelancer } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';
import { ImWhatsapp } from 'react-icons/im';

function Nav({ children }: { children: JSX.Element }) {
   const { theme, setTheme } = useTheme();
   const themes = [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
   ];
   return (
      <div className="drawer">
         <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content flex flex-col">
            <div
               className="w-full navbar font-bold z-10 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
               style={{}}
            >
               <div className="flex-none lg:hidden">
                  <label
                     htmlFor="my-drawer-3"
                     className="btn btn-sm btn-square  btn-outline"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                     </svg>
                  </label>
               </div>
               <div className="ml-24 hidden md:block">
                  <ul className="flex justify-center items-center">
                     <li>
                        <ImWhatsapp className="my-icon" />
                     </li>
                     <li>
                        <VscGithub className="my-icon" />
                     </li>

                     <li>
                        <TbBrandLinkedin className="my-icon" />
                     </li>
                     <li>
                        <SiFreelancer className="my-icon fr" />
                     </li>
                  </ul>
               </div>
               <div className="hidden  lg:flex flex-1  justify-end">
                  <ul className="menu menu-horizontal items-center justify-end ">
                     <li className="p-1 mx-4 cursor-pointer">Hi</li>
                     <li className="p-1 mx-4 cursor-pointer">Works</li>
                     <li className="p-1 mx-4 cursor-pointer">Connect</li>
                     <button className="w-24 h-8 btn btn-sm btn-outline btn-secondary ">
                        Resume
                     </button>
                  </ul>
               </div>
               <div className="flex flex-1 lg:flex-none lg:mr-[9%] justify-end lg:justify-start items-center mx-10">
                  <div className="dropdown dropdown-end flex justify-center items-center">
                     <label
                        tabIndex={0}
                        className="btn btn-sm btn-secondary text-secondary-content w-10 h-10 mx-2 my-4  rounded-full  outline-none border-none  transition-all"
                     >
                        <FaPaintBrush className="text-Xl w-8 h-8" />
                     </label>
                     <ul
                        tabIndex={0}
                        className="z-10 bg-base-200  dropdown-content bg-transparent text-primary-content menu top-14 -left-20 shadow w-80 h-64 "
                     >
                        {themes.map((t, i) => (
                           <li
                              key={i}
                              data-theme={t}
                              className="rounded-full m-2 w-8 h-8 bg-secondary cursor-pointer"
                              onClick={() => setTheme(t)}
                           ></li>
                        ))}
                     </ul>
                  </div>
                  <Toggler />
               </div>
            </div>
            {children}
         </div>
         <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100"></ul>
         </div>
      </div>
   );
}

export default Nav;
