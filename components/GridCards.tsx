import { FC, useRef } from 'react';
import Image from 'next/image';
import Gallery from './Gallery';
interface GridCardsProps {}

const GridCards: FC<GridCardsProps> = () => {
   const works = ['maloma.png.3', 'n.jpg.5', 'wms.jpg.5', 'n2.png.2'];
   //    const gallery = useRef<HTMLDivElement>(null);
   return (
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
         {works.map((el, index) => (
            <div
               key={index}
               className="relative max-h-[300px] min-w-[300px] overflow-hidden rounded-lg shadow-2xl dark:shadow-gray-600"
            >
               <Gallery folder={el} />
            </div>
         ))}
      </div>
   );
};

export default GridCards;
