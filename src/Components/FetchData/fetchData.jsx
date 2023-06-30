import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../MainPage/MainPage.css'

const FetchData = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyB-mTIJypM_zWbK9Uy4iGJvGary0mR2ZDE&cx=377c75df53688410c&q=computer`');
        setImages(response.data.items);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-container">
        {images.length? images.map((image) => (
        <img key={image.id} src={image.pagemap.cse_image?.[0].src} className="image-item" />     
        )):null}
      </div>
    </div>
  );
};

export default FetchData;