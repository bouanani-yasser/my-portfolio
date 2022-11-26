import { FC } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { VscGithub } from 'react-icons/vsc';
import Gallery from './Gallery';

interface CardProps {
   project: any;
}

const Card: FC<CardProps> = ({ project }) => {
   const { dir } = project;
   let folder = dir.split('.')[0];
   let ext = dir.split('.')[1];
   return (
      <div
         className=" bg-cover rounded-lg cursor-pointer h-96 group"
         style={{ backgroundImage: `url(${`works/${folder}/${0}.${ext}`})` }}
      >
         <div className="relative w-full m-0 h-full px-4 py-2  transition-opacity duration-700 opacity-1 backdrop-blur-sm bg-gray-800/60 group-hover:backdrop-blur-0">
            <h2 className="mt-1 text-2xl font-semibold  capitalize">
               {project.title}
            </h2>
            <p className="mt-1 p-1 pl-4 -translate-x-5  font-light rounded-md text-xs tracking-wider text-gray-100 uppercase bg-primary">
               {project.desc}
            </p>
            <ul className="menu menu-horizontal gap-1  my-2 flex-wrap max-w-[300px] text-secondary">
               {project.tools.map((tool: string, index: number) => (
                  <li
                     key={index}
                     className="bg-base-100 rounded-md px-1 text-sm "
                  >
                     {tool}
                  </li>
               ))}
            </ul>
            <div className="absolute text-secondary-content top-[220px] right-5 my-1 flex justify-start gap-3">
               <Gallery project={project} />
               <FiExternalLink size={25} />
               <VscGithub size={25} />
            </div>
         </div>
      </div>
   );
};

export default Card;
