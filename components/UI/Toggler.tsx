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
         }  btn btn-sm glass text-primary-content w-10 h-10  my-4  rounded-full  outline-none border-none  transition-all`}
         onClick={clickHandler}
         aria-label="Toggle Dark Mode"
      >
         {theme === 'light' ? (
            <GiMoon className="text-slate-900 w-10 h-10" />
         ) : (
            <FaSun className="text-yellow-500 w-10 h-10 " />
         )}
      </button>
   );
};

export default Toggler;
