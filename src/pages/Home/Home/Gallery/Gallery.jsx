import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Gallery = () => {
  const images = [
    {
      original: 'https://i.ibb.co/DfJP78G/pexels-photo-1184580.jpg',
      thumbnail: 'https://i.ibb.co/DfJP78G/pexels-photo-1184580.jpg',
      description: 'Graduates in City college',
    },
    {
      original: 'https://images.pexels.com/photos/1628095/pexels-photo-1628095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      thumbnail: 'https://images.pexels.com/photos/1628095/pexels-photo-1628095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Graduates in XYZ college',
    },
    {
      original: 'https://images.pexels.com/photos/5227311/pexels-photo-5227311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      thumbnail: 'https://images.pexels.com/photos/5227311/pexels-photo-5227311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Graduates in ABC College',
    },
    {
      original: 'https://images.pexels.com/photos/5508486/pexels-photo-5508486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      thumbnail: 'https://images.pexels.com/photos/5508486/pexels-photo-5508486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Graduates in City college',
    },
  ];

  return (
    <div>
      <h2 className='text-center text-3xl m-4 bg-blue-600 rounded text-primary-content'>College Graduates Gallery</h2>
      <ImageGallery items={images} />
    </div>
  );
};

export default Gallery;
