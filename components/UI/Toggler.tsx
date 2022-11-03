import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { GiMoon } from 'react-icons/gi';
import { FaSun } from 'react-icons/fa';

const Toggler = () => {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
   useEffect(() => setMounted(true), []);
   if (!mounted) return null;
   return (
      <button
         className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center dark:bg-slate-900 hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
         onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
         aria-label="Toggle Dark Mode"
      >
         {theme === 'light' ? (
            <GiMoon className="text-[#36A9DE] w-5 h-5" />
         ) : (
            <FaSun className="text-white w-5 h-5" />
         )}
      </button>
   );
};

export default Toggler;
