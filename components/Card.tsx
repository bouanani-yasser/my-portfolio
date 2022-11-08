import { FC } from 'react';

interface CardProps {
   path: string;
}

const Card: FC<CardProps> = ({ path }) => {
   return (
      <a href={path}>
         <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{ backgroundImage: `url(${path})` }}
         >
            <div className="flex flex-col justify-center w-full h-full px-4 py-2 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
               <h2 className="mt-1 text-2xl font-semibold text-white capitalize">
                  Website Name
               </h2>
               <p className="mt-1 text-sm tracking-wider text-blue-400 uppercase ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat, sit!
               </p>
            </div>
         </div>
         <img
            className="max-h-full min-w-[200px] max-w-full hidden"
            src={path}
         />
      </a>
   );
};

export default Card;
