import { AnimatePresence, motion } from 'framer-motion';

export function Spinner() {
   return (
      <AnimatePresence>
         <motion.div
            className="flex justify-center items-center h-[100vh] dark:bg-slate-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
         >
            <motion.div
               className="lds-roller h-10"
               initial={{ scale: 0.5 }}
               animate={{ scale: 1.5 }}
               exit={{ scale: 0.5 }}
            >
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </motion.div>
         </motion.div>
      </AnimatePresence>
   );
}
