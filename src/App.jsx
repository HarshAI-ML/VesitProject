import React, { useState, useEffect } from 'react';
import Loading from './components/loader/Loading';
// import Navbar from './components/navbar';
import Navbar from './components/navbar/navbar';
import './App.css';
import LanguageSwitcher from './components/languageTranslate/LanguageSwitcher';
import i18n from './components/languageTranslate/i18';
import { Carousel } from 'react-responsive-carousel';
import ImageCarousel from './components/carousel/carousel';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000); // Simulating 4 seconds loading
  }, []);

  return (
    <div className="App">
    {loading ? <Loading /> : <div><Navbar /> <ImageCarousel /></div>}
  </div>
    
  );
}

export default App;
