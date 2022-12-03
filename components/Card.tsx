import { FC } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { VscGithub } from 'react-icons/vsc';
import Gallery from './Gallery';

interface CardProps {
   project: any;
}

const Card: FC<CardProps> = ({ project }) => {
   const { dir, github, link } = project;
   let folder = dir.split('.')[0];
   let ext = dir.split('.')[1];
   return (
      <div
         className=" bg-cover rounded-lg cursor-pointer h-full group"
         style={{ backgroundImage: `url(${`works/${folder}/${0}.${ext}`})` }}
      >
         <div className="relative text-white w-full m-0 mb-10 h-full px-4 py-2 transition-opacity duration-700 opacity-1 backdrop-blur-sm bg-gray-800/60 ">
            <h2 className="mt-1 text-2xl font-semibold  capitalize">
               {project.title}
            </h2>
            <p className="mt-1 p-1 pl-5 -translate-x-5  font-light rounded-md text-xs tracking-wider text-gray-100 uppercase ">
               {project.desc}
            </p>
            <h3 className="font-bold">Tools:</h3>
            <ul className="flex gap-1  my-2 flex-wrap ">
               {project.tools.map((tool: string, index: number) => (
                  <li
                     key={index}
                     className="bg-secondary rounded-md p-1 my-1 text-sm "
                  >
                     {tool}
                  </li>
               ))}
            </ul>
            <div className="absolute text-secondary-content bottom-2  right-5 my-1 flex justify-start gap-3">
               <Gallery project={project} />
               {github && (
                  <a href={github} target="blank">
                     <VscGithub size={25} />
                  </a>
               )}
               <a href={link} target="blank">
                  <FiExternalLink size={25} />
               </a>
            </div>
         </div>
      </div>
   );
};

export default Card;
