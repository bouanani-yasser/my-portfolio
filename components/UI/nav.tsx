import Toggler from './Toggler';
import { useTheme } from 'next-themes';
import { FaPaintBrush } from 'react-icons/fa';
import { TbBrandLinkedin } from 'react-icons/tb';
import { SiFreelancer } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';
import { ImWhatsapp } from 'react-icons/im';

function Nav({ children }: { children: JSX.Element }) {
   const { theme, setTheme } = useTheme();
   const themes = ['lofi', 'forest', 'coffee', 'autumn', 'business'];
   return (
      <div className="drawer">
         <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content flex flex-col">
            <div className="w-full navbar justify-between overflow-x-clip  font-bold z-10 bg-transparent ">
               <div className="flex-none lg:hidden">
                  <label
                     htmlFor="my-drawer-3"
                     className="btn btn-sm ml-8 btn-square h-[2.5rem] w-[2.5rem]  btn-outline"
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
                     <a href=" https://wa.me/+213669588289" target="blank">
                        <li>
                           <ImWhatsapp className="my-icon" />
                        </li>
                     </a>
                     <a href="http://github.com/bouanani-yasser" target="blank">
                        <li>
                           <VscGithub className="my-icon" />
                        </li>
                     </a>
                     <a
                        href="http://linkedin.com/in/yasser-bouanani "
                        target="blank"
                     >
                        <li>
                           <TbBrandLinkedin className="my-icon" />
                        </li>
                     </a>
                     <a
                        href="http://freelancer.com/u/yasserbouanani"
                        target="blank"
                     >
                        <li>
                           <SiFreelancer className="my-icon fr" />
                        </li>
                     </a>
                  </ul>
               </div>
               <div className="hidden  lg:flex flex-1  justify-end">
                  <ul className="menu menu-horizontal items-center justify-end ">
                     <a href="#hi">
                        <li className="p-1 m-4 cursor-pointer ">Hi</li>
                     </a>
                     <a href="#works">
                        <li className="p-1 m-4 cursor-pointer">Works</li>
                     </a>
                     <a href="#contact">
                        <li className="p-1 m-4 cursor-pointer">Connect</li>
                     </a>
                     <a
                        className="w-24 h-8 btn btn-sm btn-outline btn-secondary "
                        href="/YasserBouanani.pdf"
                        download
                     >
                        Resume
                     </a>
                  </ul>
               </div>
               <div className="mr-2 lg:mr-[9%] ml-8 flex flex-1 md:flex-none justify-end lg:justify-start items-center">
                  <div className="dropdown dropdown-end flex justify-center items-center">
                     <label
                        tabIndex={0}
                        className="btn btn-sm btn-secondary text-secondary-content w-10 h-10 mx-2 my-4  rounded-full  outline-none border-none  transition-all"
                     >
                        <FaPaintBrush className="text-Xl w-8 h-8" />
                     </label>
                     <ul
                        tabIndex={0}
                        className="z-10 bg-base-200  dropdown-content bg-transparent text-primary-content menu top-14 -left-0 rounded-lg  shadow w-12 h-fit "
                     >
                        {themes.map((t, i) => (
                           <li
                              key={i}
                              data-theme={t}
                              className="rounded-full m-2 w-8 h-8 bg-secondary cursor-pointer ring-2 ring-base-100"
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
         <div className="drawer-side font-bold dark:bg-[#242933]">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 justify-between  ">
               <div>
                  <a href="#hi">
                     <li className="p-1 m-4 cursor-pointer ">Hi</li>
                  </a>
                  <a href="#works">
                     <li className="p-1 m-4 cursor-pointer">Works</li>
                  </a>
                  <a href="#contact">
                     <li className="p-1 m-4 cursor-pointer">Connect</li>
                  </a>
                  <a
                     className="w-24 h-8 btn btn-sm btn-outline btn-secondary "
                     href="/YasserBouanani.pdf"
                     download
                  >
                     Resume
                  </a>
               </div>
               <div className="flex space-x-2 mx-auto ">
                  <a href=" https://wa.me/+213669588289" target="blank">
                     <li>
                        <ImWhatsapp className="text-primary w-14 h-14 bg-base-200" />
                     </li>
                  </a>
                  <a href="http://github.com/bouanani-yasser" target="blank">
                     <li>
                        <VscGithub className="text-primary w-14 h-14 bg-base-200" />
                     </li>
                  </a>
                  <a
                     href="http://linkedin.com/in/yasser-bouanani "
                     target="blank"
                  >
                     <li>
                        <TbBrandLinkedin className="text-primary w-14 h-14 bg-base-200" />
                     </li>
                  </a>
                  <a
                     href="http://freelancer.com/u/yasserbouanani"
                     target="blank"
                  >
                     <li>
                        <SiFreelancer className="text-primary w-14 h-14 bg-base-200" />
                     </li>
                  </a>
               </div>
            </ul>
         </div>
      </div>
   );
}

export default Nav;
