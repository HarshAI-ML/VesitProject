import React from 'react';
import './Loading.css'; // Import CSS for the loading spinner
import './maintitle.css';

const Loading = () => {
  return (
    
    <div className="loading-container">
      <b> <h2 class="Maintitle">Kisan Sadhan</h2></b>
      <div className="loading-spinner"></div>
      <p>Loading...</p>
      
    </div>
  );
};

export default Loading;
