import { FC, useRef } from 'react';
import Image from 'next/image';
import Gallery from './Gallery';
interface GridCardsProps {}

const GridCards: FC<GridCardsProps> = () => {
   const works = ['maloma.png.3', 'n.jpg.5', 'wms.jpg.5'];
   //    const gallery = useRef<HTMLDivElement>(null);
   return (
      <div className="grid-card grid gap-4 grid-cols-3 grid-rows-3">
         {works.map((el) => (
            <div className="relative">
               {/* <Image
                  width={500}
                  height={400}
                  src={`/works/${el.split('.')[0]}/0.${el.split('.')[1]}`}
                  onClick={() => gallery.current?.Click()}
               /> */}
               <Gallery folder={el} />
            </div>
         ))}
      </div>
   );
};

export default GridCards;
