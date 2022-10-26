function Nav() {
   return (
      <header className="text-white border-b-2 w-full">
         <nav className="flex justify-between items-center align-middle max-w-[80%] h-[70px] m-auto border-gray-600">
            <div className="w-1/3 p-auto my-auto  font-bold">
               Bouanani Yasser
            </div>
            <ul className="flex flex-row  space-x-10 justify-center items-center d w-1/2 font-bold">
               <li className="p-1 m-1 cursor-pointer">Hi</li>
               <li className="p-1 m-1 cursor-pointer">Works</li>
               <li className="p-1 m-1 cursor-pointer">Connect</li>
               <li className="p-1 m-1 cursor-pointer">About</li>
            </ul>
         </nav>
      </header>
   );
}

export default Nav;
