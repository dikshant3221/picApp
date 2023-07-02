import React, { useState } from 'react';
import './MainPage.css';
import FetchData from '../FetchData/fetchData';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedButton, setSelectedButton] = useState('Mountains');
  const [searchItem, setSearchItem] = useState("Mountains");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setSearchItem(buttonName);
  };
  
  const handleSearch = () => {
    // Perform search functionality
    setSearchItem(searchTerm);
    setSelectedButton(searchTerm);
   
  };
  return (
    <div className="main-page">
      <div className="fa-3x">
      <i className="fa-solid fa-camera-rotate fa-flip">Pics Selector</i>
      </div>
  
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
          placeholder="Search"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="button-container">
        <button
          className={`main-button ${selectedButton === 'Mountains' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Mountains')}
        >
          Mountains
        </button>
        <button
          className={`main-button ${selectedButton === 'Beaches' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Beaches')}
        >
          Beaches
        </button>
        <button
          className={`main-button ${selectedButton === 'Birds' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Birds')}
        >
         Birds
        </button>
        <button
          className={`main-button ${selectedButton === 'Foods' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Foods')}
        >
          Foods
        </button>
      </div>
      <p className="selected-button">Showing Result of : {selectedButton}</p>
      <div>
     {(searchItem )?<FetchData  message = {searchItem} />:null}
    </div>
    </div>
    
  );
};

export default MainPage;