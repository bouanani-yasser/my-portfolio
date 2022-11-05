import { FC } from 'react';
import Image from 'next/image';

import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Card from './Card';

interface GalleryProps {
   folder: String;
}

const Gallery: FC<GalleryProps> = ({ folder }) => {
   let len = Array.from(Array(+folder.split('.')[2]).keys());
   let dir = folder.split('.')[0];
   let ext = folder.split('.')[1];
   return (
      <div className="gallery">
         <LightGallery
            // onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
         >
            {len.map((_, index) => (
               <Card path={`works/${dir}/${index}.${ext}`} key={index} />
            ))}
         </LightGallery>
      </div>
   );
};

export default Gallery;
