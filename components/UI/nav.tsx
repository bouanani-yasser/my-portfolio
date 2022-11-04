import { BsTwitter } from 'react-icons/bs';
import { TbBrandLinkedin } from 'react-icons/tb';
import { SiFreelancer } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';
import { ImWhatsapp } from 'react-icons/im';
import { useAppContext } from '../../context/appContext';
import Toggler from './Toggler';

function Nav() {
   const { setDark } = useAppContext();
   return (
      <header className="w-full">
         <nav className="flex justify-between items-center align-middle max-w-[80%] h-[70px] m-auto border-gray-600">
            <div className="text-white w-1/3 p-auto my-auto  font-bold">{`<YasserBouanani/>`}</div>
            <ul className="text-[#fff] flex flex-row  space-x-10 justify-center items-center d w-1/2 font-bold">
               <li className="p-1 m-1 cursor-pointer">Hi</li>
               <li className="p-1 m-1 cursor-pointer">Works</li>
               <li className="p-1 m-1 cursor-pointer">Connect</li>
               <button className="w-24 h-8 text-black bg-blue-100 rounded-lg  flex items-center justify-center hover:ring-2 ring-[#3b89d7] transition-all duration-300 focus:outline-none">
                  Resume
               </button>
               <Toggler />
            </ul>
         </nav>
         <div className="absolute top-[130px] left-[5%]">
            <ul className="flex flex-col  justify-center items-center">
               <li>
                  <BsTwitter className="my-icon" />
               </li>
               <li>
                  <TbBrandLinkedin className="my-icon" />
               </li>
               <li>
                  <SiFreelancer className="my-icon fr" />
               </li>
               <li>
                  <VscGithub className="my-icon" />
               </li>
               <li>
                  <ImWhatsapp className="my-icon" />
               </li>
            </ul>
         </div>
      </header>
   );
}

export default Nav;
