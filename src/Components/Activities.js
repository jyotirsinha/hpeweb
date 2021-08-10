import React from "react";
import "../CSS/activities.css";
import trekking from "../images/trekking.jpeg"
import cycling from "../images/cycling.jpg";
const Activities = () => {
  return (
    <div className="activities">
      <div
        style={{ backgroundImage: `url(${cycling})` }}
        className="cycling"
      >
          <h1>Cycling</h1>

      </div>
      <div 
      style={{ backgroundImage: `url(${trekking})` }}
      className="trekking">
          <h1>Trekking</h1>
      </div>
      <div className="birding">
        <h1>Birding</h1>
      </div>
      <div className="kayaking">
        <h1>Kayaking</h1>
      </div>

    </div>
  );
};

export default Activities;
