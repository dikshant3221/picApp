import { useState,useEffect} from 'react';
import '../ImagePopUp/Popup.css';
import { saveAs } from 'file-saver';
import Loading from '../Loader/loading.jsx';
const Popup = ({ imageUrl,id}) => {
  const [showPopup, setShowPopup] = useState(true);
  const [isloaded, setIsLoading] = useState(false);
  useEffect(()=>{
    setIsLoading(false);
    setShowPopup(true);
  },[imageUrl]);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleDownload = () => {
    saveAs(imageUrl.full, 'image.jpg');
  };

  return showPopup ? (
    <div className="image-popup">
      <div className="popup-overlay">
        <div className="popup-content">
          <img src={imageUrl.small_s3} alt={id} onLoad ={()=>setIsLoading(true)} />
		   {isloaded? 
          <div className="popup-button">
            <button className="downloadButton" onClick={handleDownload}>Download</button>
            <button className="downloadButton" onClick={handlePopupClose}>Close</button>
          </div>
		   :<Loading/>}
        </div>
      </div>
      <div className="fade-effect"></div>
    </div>
  ) : null;
};

export default Popup;