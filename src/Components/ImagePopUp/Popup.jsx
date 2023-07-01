import React, { useState,useEffect } from 'react';
import '../ImagePopUp/Popup.css';
import { saveAs } from 'file-saver';
const Popup = ({ imageUrl,id}) => {
  const [showPopup, setShowPopup] = useState(true);
  

  useEffect(()=>{
    setShowPopup(true);

  },[imageUrl]);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleDownload = () => {
    saveAs(imageUrl, 'image.jpg');
  };

  return (
    <div className="image-popup">
        
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img src={imageUrl} alt={id} />
            <button class = "downloadButton" onClick={handleDownload}>Download</button>
            <button class = "downloadButton" onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
         {showPopup && <div className="fade-effect" onClick={handlePopupClose}></div>}
    </div>
  );
};

export default Popup;