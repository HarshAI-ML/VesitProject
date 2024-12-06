import React from 'react';
import './Loading.css'; // Import CSS for the loading spinner

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
      <b> Phygital Farms</b>
    </div>
  );
};

export default Loading;
