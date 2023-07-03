import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../MainPage/MainPage.css'
import Popup from '../ImagePopUp/Popup';
const url = "https://api.unsplash.com/search/photos?query="
const url1 = "&client_id=P4rheu1xo8vBqBKxM4S0XevaOFgPc1TZM4zC0Z7VbWI"

const FetchData = (props) => {
  const [images, setImages] = useState([]);
  const [popUpImage, setPopUpImage] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(url + props.message + url1);
        setImages(response.data.results); 
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [props]);

  const showPopUp = (img) => {
    if (popUpImage.id === img.id && popUpImage.id !== '') {
      // If the same image is clicked again, clear the popUpImage state and close the popup
      setPopUpImage({});
    } else {
      setPopUpImage(img);
    }
  };

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-container">
        {images.length? images.map((image) => (
        <img key={image.id} src={image.urls.thumb} alt = {props.message} className="image-item" onClick={(e)=>showPopUp(image)}/>     
        )):<h1>Sorry No Images with name {props.message} </h1>}
      </div>
      { popUpImage.id && <Popup imageUrl={popUpImage.urls} id ={popUpImage.id}/>}
    </div>
  );
};

export default FetchData;