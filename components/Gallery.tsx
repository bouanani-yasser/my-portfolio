import { FC } from 'react';
import Image from 'next/image';

import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

interface GalleryProps {
   folder: String;
}

const Gallery: FC<GalleryProps> = ({ folder }) => {
   let len = Array.from(Array(+folder.split('.')[2]).keys());
   let dir = folder.split('.')[0];
   let ext = folder.split('.')[1];
   return (
      <div className="gallery">
         <div className="gallery-items">
            <LightGallery
               // onInit={onInit}
               speed={500}
               plugins={[lgThumbnail, lgZoom]}
            >
               {len.map((_, index) => (
                  <a
                     href={`works/${dir}/${index}.${ext}`}
                     className={`${index !== 0 && 'hidden'}`}
                  >
                     <img
                        className="h-fit rounded-lg border-solid border-2  border-[#3b89d7] max-w-full "
                        src={`/works/${dir}/${index}.${ext}`}
                     />
                  </a>
               ))}
            </LightGallery>
         </div>
      </div>
   );
};

export default Gallery;
