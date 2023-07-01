import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../MainPage/MainPage.css'
import Popup from '../ImagePopUp/Popup';
const url = "https://api.unsplash.com/search/photos?query="
const url1 = "&client_id=P4rheu1xo8vBqBKxM4S0XevaOFgPc1TZM4zC0Z7VbWI"

const FetchData = (props) => {
  const [images, setImages] = useState([]);
  const [popUp, setVisibilty] = useState(false);
  const [popUpImage, setpopUpImage] = useState({});

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

  const showPopUp = (img)=>{
     setpopUpImage(img);
     setVisibilty(true);
  }

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-container">
        {images.length? images.map((image) => (
        <img key={image.id} src={image.urls.thumb} alt = {props.message} className="image-item" onClick={(e)=>showPopUp(image)}/>     
        )):<h1>Sorry No Images with name {props.message} </h1>}
      </div>
      { popUp?<Popup imageUrl={popUpImage.urls.regular} id ={popUpImage.id}/>:null}
    </div>
  );
};

export default FetchData;