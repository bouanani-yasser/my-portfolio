import Toggler from './Toggler';
import { useTheme } from 'next-themes';
import { FaPaintBrush } from 'react-icons/fa';

function Nav() {
   const { theme, setTheme } = useTheme();
   return (
      <header className="absolute top-0 z-10 w-full">
         <nav className="flex justify-center items-center align-middle max-w-[90%] h-[70px] m-auto ">
            <div className="text-neutral w-1/3 p-auto my-auto  font-bold">{`<YasserBouanani/>`}</div>
            <ul className="flex flex-row  space-x-10 justify-center items-center d w-1/2 font-bold">
               <li className="p-1 m-1 cursor-pointer">Hi</li>
               <li className="p-1 m-1 cursor-pointer">Works</li>
               <li className="p-1 m-1 cursor-pointer">Connect</li>
               <button className="w-24 h-8 text-black bg-blue-100 rounded-lg  flex items-center justify-center hover:ring-2 ring-primary transition-all duration-300 focus:outline-none">
                  Resume
               </button>
               <div className="dropdown dropdown-end flex justify-center items-center">
                  <label
                     tabIndex={0}
                     className="btn btn-sm btn-secondary text-base-100 w-10 h-10 mx-2 my-4  rounded-full  outline-none border-none  transition-all"
                  >
                     <FaPaintBrush className="text-Xl w-8 h-8" />
                  </label>
                  <ul
                     tabIndex={0}
                     className="z-10 bg-base-200  dropdown-content bg-transparent text-primary menu top-14 left-0 shadow  rounded-full w-12  overflow-x-hidden"
                  >
                     <li
                        data-theme="cyberpunk"
                        className="rounded-full m-2 w-8 h-8 bg-secondary cursor-pointer"
                        onClick={() => setTheme('cyberpunk')}
                     ></li>
                     <li
                        data-theme="forest"
                        className="rounded-full m-2 w-8 h-8 bg-secondary cursor-pointer"
                        onClick={() => setTheme('forest')}
                     ></li>
                     <li
                        data-theme="retro"
                        className="rounded-full m-2 w-8 h-8 bg-secondary cursor-pointer"
                        onClick={() => setTheme('retro')}
                     ></li>
                     <li
                        data-theme="dracula"
                        className="rounded-full m-2 w-8 h-8 bg-secondary cursor-pointer"
                        onClick={() => setTheme('dracula')}
                     ></li>
                  </ul>
               </div>
               <Toggler />
            </ul>
         </nav>
      </header>
   );
}

export default Nav;
