import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../MainPage/MainPage.css'
const url = "https://api.unsplash.com/search/photos?query="
const url1 = "&client_id=P4rheu1xo8vBqBKxM4S0XevaOFgPc1TZM4zC0Z7VbWI"
const FetchData = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        await axios.get(url + props.message+ url1).then(response=>{
          setImages(response.data.results);
        });
       
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [props]);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-container">
        {images.length? images.map((image) => (
        <img key={image.id} src={image.links.download} alt = {props.message} className="image-item" />     
        )):<h1>Sorry No Images with name {props.message} </h1>}
      </div>
    </div>
  );
};

export default FetchData;