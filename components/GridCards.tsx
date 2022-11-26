import { FC } from 'react';
import Card from './Card';
interface GridCardsProps {}

const GridCards: FC<GridCardsProps> = () => {
   const works = ['maloma.png.3', 'n.jpg.5', 'wms.jpg.5', 'n2.png.2'];
   const projectsDetails = [
      {
         title: 'Typing',
         desc: 'A website developed using Next.js framework to help users learning touch typing and improve their typing skills by taking lessons, tests with several languages, users can login and save their progress.',
         link: '',
         github: '',
         tools: [
            'Next.js',
            'MongoDB',
            'Restful API',
            'JavaScript',
            'HTML',
            'SCSS',
            'React',
            'Bootstrap',
         ],
         dir: 'typing.png.7',
      },
      {
         title: 'Maloma',
         desc: 'A wordpress theme that I made from scratch for my blog maloma,it has a beautiful grid design and smooth css animation ',
         link: '',
         github: '',
         tools: [
            'PHP',
            'WordPress',
            'JavaScript',
            'SCSS',
            'CSS',
            'HTML',
            'FileZilla',
         ],
         dir: 'maloma.png.3',
      },
   ];

   return (
      <div className="grid justify-center items-center m-10 grid-cols-1 gap-6 mt-6 xl:mt-8 xl:gap-8 md:grid-cols-2 xl:grid-cols-3">
         {projectsDetails.map((project, index) => (
            <div
               key={index}
               className="relative max-h-[260px] min-w-[200px] w-[95%] md:w-[80%] overflow-hidden rounded-lg shadow-lg dark:shadow-gray-600"
            >
               <Card project={project} />
            </div>
         ))}
      </div>
   );
};

export default GridCards;
