import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { SiFreelancer } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';
function Nav() {
   return (
      <header className=" border-b-2  w-full">
         <nav className="flex justify-between items-center align-middle max-w-[80%] h-[70px] m-auto border-gray-600">
            <div className="w-1/3 p-auto my-auto  font-bold">{`</>`}</div>
            <ul className="flex flex-row  space-x-10 justify-center items-center d w-1/2 font-bold">
               <li className="p-1 m-1 cursor-pointer">Hi</li>
               <li className="p-1 m-1 cursor-pointer">Works</li>
               <li className="p-1 m-1 cursor-pointer">Connect</li>
               <li className="p-1 m-1 cursor-pointer">About</li>
            </ul>
         </nav>
         <div className="absolute bottom-[5%] left-[5%]">
            <ul className="flex flex-col  justify-center items-center">
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
                  <VscGithub className="my-icon" />
               </li>
            </ul>
         </div>
      </header>
   );
}

export default Nav;
