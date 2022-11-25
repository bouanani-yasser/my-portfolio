import { FC } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { VscGithub } from 'react-icons/vsc';

import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
interface CardProps {
   path: string;
}

const Card: FC<CardProps> = ({ path }) => {
   return (
      <>
         <LightGallery
            // onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
         >
            <a href={path} className="gal-item">
               <img
                  className="max-h-full min-w-[200px] max-w-full -z-10"
                  src={path}
               />
            </a>
         </LightGallery>
         <div
            className=" bg-cover rounded-lg cursor-pointer h-96 group"
            style={{ backgroundImage: `url(${path})` }}
         >
            <div className="relative w-full m-0 h-full px-4 py-2  transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
               <h2 className="mt-1 text-2xl font-semibold text-white capitalize">
                  Website Name
               </h2>
               <p className="mt-1 p-1 pl-4 -translate-x-5 opacity-70 font-light rounded-md text-sm tracking-wider text-gray-100 uppercase bg-primary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat, sit! Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Quaerat, sit!
               </p>
               <ul className="menu menu-horizontal gap-1  my-2 flex-wrap max-w-[300px] text-secondary">
                  <li className="bg-base-100 rounded-md px-1 text-sm ">
                     TypeScript
                  </li>
               </ul>
               <div className="absolute top-[220px] right-5 my-1 flex justify-start gap-3">
                  <FiExternalLink size={25} />
                  <VscGithub size={25} />
               </div>
            </div>
         </div>
      </>
   );
};

export default Card;
