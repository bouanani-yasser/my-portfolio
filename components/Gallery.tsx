import { FC } from 'react';

import { IoIosImages } from 'react-icons/io';

import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

interface GalleryProps {
   project: any;
}

const Gallery: FC<GalleryProps> = ({ project }) => {
   const { dir } = project;
   let len = Array.from(Array(+dir.split('.')[2]).keys());
   let folder = dir.split('.')[0];
   let ext = dir.split('.')[1];
   return (
      <div className="gallery-item relative">
         <LightGallery
            // onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
         >
            {len.map((_, index) => (
               <a
                  style={index !== 0 ? { display: 'none' } : {}}
                  href={`works/${folder}/${index}.${ext}`}
                  key={index}
               >
                  <IoIosImages size={25} />
                  <img
                     className="max-h-full min-w-[200px] max-w-full hidden "
                     src={`works/${folder}/${index}.${ext}`}
                  />
               </a>
            ))}
         </LightGallery>
      </div>
   );
};

export default Gallery;
