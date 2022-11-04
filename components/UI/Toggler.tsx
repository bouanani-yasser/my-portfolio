import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { GiMoon } from 'react-icons/gi';
import { FaSun } from 'react-icons/fa';

const Toggler = () => {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
   const [clicked, setClicked] = useState(false);
   useEffect(() => setMounted(true), []);

   const clickHandler = () => {
      setClicked(true);
      setTimeout(() => {
         setClicked(false);
      }, 1000);
      setTheme(theme === 'light' ? 'dark' : 'light');
   };

   if (!mounted) return null;
   return (
      <button
         className={`${
            clicked ? 'spin' : ''
         } w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center  hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none`}
         onClick={clickHandler}
         aria-label="Toggle Dark Mode"
      >
         {theme === 'light' ? (
            <GiMoon className="text-[#36A9DE] w-5 h-5" />
         ) : (
            <FaSun className="text-yellow-500 w-5 h-5" />
         )}
      </button>
   );
};

export default Toggler;
