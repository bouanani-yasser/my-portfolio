import { FC, useRef } from 'react';
import Image from 'next/image';
import Gallery from './Gallery';
interface GridCardsProps {}

const GridCards: FC<GridCardsProps> = () => {
   const works = ['maloma.png.3', 'n.jpg.5', 'wms.jpg.5', 'n2.png.2'];
   //    const gallery = useRef<HTMLDivElement>(null);
   return (
      <div className="grid justify-center items-center m-20 grid-cols-1 gap-6 mt-6 xl:mt-8 xl:gap-8 md:grid-cols-2 xl:grid-cols-3">
         {works.map((el, index) => (
            <div
               key={index}
               className="relative max-h-[200px] min-w-[200px] w-[95%] md:w-[80%] overflow-hidden rounded-lg shadow-2xl dark:shadow-gray-600"
            >
               <Gallery folder={el} />
            </div>
         ))}
      </div>
   );
};

export default GridCards;
