import { FC } from 'react';
import Card from './Card';
interface GridCardsProps {}

const GridCards: FC<GridCardsProps> = () => {
   const works = ['maloma.png.3', 'n.jpg.5', 'wms.jpg.5', 'n2.png.2'];
   const projectsDetails = [
      {
         title: 'Typing',
         desc: 'A website developed using Next.js framework to help users learning touch typing and improve their typing skills by taking lessons, tests with several languages, users can login and save their progress.',
         link: 'https://ttypist.vercel.app/',
         github: 'https://github.com/bouanani-yasser/typing-site.git',
         tools: [
            'Next.js',
            'MongoDB',
            'Restful API',
            'JavaScript',
            'HTML',
            'SCSS',
            'React',
            'Bootstrap',
            'Git',
         ],
         dir: 'typing.png.7',
      },
      {
         title: 'Maloma',
         desc: 'A wordpress theme that I made from scratch for my blog maloma,it has a beautiful grid design and smooth css animations. ',
         link: 'https://maloma.online',
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
      {
         title: 'Files Manager Web App',
         desc: 'Web application built using MERN stack, it allows users to upload files and manage them easily, it has also filtering system to search among files and get results so fast, users can also share files between each others.',
         link: 'https://mern-wms.netlify.app/',
         github: 'https://github.com/bouanani-yasser/MERN-WMS-FRONT',
         tools: [
            'Node.js',
            'Express.js',
            'React',
            'MongoDB',
            'Restful API',
            'JavaScript',
            'HTML',
            'CSS',
            'Bootstrap',
            'Git',
         ],
         dir: 'wms.jpg.5',
      },
      {
         title: 'MyReads ',
         desc: 'Web App allows you to browse many books then select and categorize books you have read, are currently reading, or want to read it’s a project aim to update user information without refreshing the app.',
         link: 'https://myreads-project1-react-nd.netlify.app/',
         github: 'https://github.com/bouanani-yasser/react-nd-project1',
         tools: ['React', 'Restful API', 'JavaScript', 'HTML', 'CSS', 'Git'],
         dir: 'n2.png.2',
      },
      {
         title: 'Would you rather game',
         desc: ' A game of questions and answers built with React, aims to manage users accounts and store their data on the global state using the Redux library',
         link: 'https://would-you-rather-app-react-nd.netlify.app/',
         github: 'https://github.com/bouanani-yasser/react-nd-project2',
         tools: [
            'React',
            'Redux',
            'Restful API',
            'JavaScript',
            'HTML',
            'CSS',
            'Git',
         ],
         dir: 'n.jpg.5',
      },
   ];

   return (
      <div className="grid justify-center items-center m-10 grid-cols-1 gap-4 mt-6 xl:gap-8  md:grid-cols-2  xl:grid-cols-3">
         {projectsDetails.map((project, index) => (
            <div
               key={index}
               className="relative  w-full h-full  overflow-hidden rounded-lg shadow-lg dark:shadow-gray-600"
            >
               <Card project={project} />
            </div>
         ))}
      </div>
   );
};

export default GridCards;
