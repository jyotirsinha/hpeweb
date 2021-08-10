import React from 'react';
import Activities from './Components/Activities';
import Carouselbar from './Components/Carouselbar';
import Intro from './Components/intro';
import Vision from './Components/vision';

import "./CSS/app.css";
function App() {
  return (
    <div className="main">
      <Intro/>
      <Vision/>
      <Activities/>
      <Carouselbar/>
      
    </div>
  );
}

export default App;
