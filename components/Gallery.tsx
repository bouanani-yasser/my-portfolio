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
   project: any;
}

const Gallery: FC<GalleryProps> = ({ project }) => {
   const { dir } = project;
   let len = Array.from(Array(+dir.split('.')[2]).keys());
   let folder = dir.split('.')[0];
   let ext = dir.split('.')[1];
   return (
      <div className="gallery">
         <LightGallery
            // onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
         >
            {len.map((_, index) => (
               <Card path={`works/${folder}/${index}.${ext}`} key={index} />
            ))}
         </LightGallery>
      </div>
   );
};

export default Gallery;
