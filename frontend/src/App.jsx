// import React, { useState, useEffect } from 'react';
// import Loading from './components/loader/Loading';
// import Navbar from './components/navbar/navbar';
// import './App.css';
// import i18n from './components/languageTranslate/i18';
// import ImageCarousel from './components/carousel/carousel';
// import Services from './components/Services/services';
// import Founders from './components/Founders/founders';
// // import Footer from './components/footer/Footer';
// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 4000); // Simulating 4 seconds loading
//   }, []);

//   return (
//     <div className="App">
//     {loading ? <Loading /> : <div><Navbar /> <ImageCarousel /><Services/><Founders/></div>}
//   </div>
    
//   );
// }

// export default App;
import i18n from "./components/languageTranslate/i18";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loader/Loading";
import Navbar from "./components/navbar/navbar";
import ImageCarousel from "./components/carousel/carousel";
import Services from "./components/Services/services";
import Founders from "./components/Founders/founders";
import Signup from "./components/signup/signup"; // Import Signup component
import "./App.css";
import About from "./components/About/about";
import Login from "./components/login/login";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000); // Simulating 4 seconds loading
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<><ImageCarousel /><Services /><Founders /></>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

