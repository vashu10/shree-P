import React from "react";
import img20 from  "../images/Image/img20.png";
import "../css/Photo.css";

function Sinimg() {
  return (
    <div>
      <div className="feature">Featured Photoshoot</div>
      <div className="single">
        <img className="image1" src={img20} alt=""></img>
        <div className="sidebar">
          Name<br></br>Price<br></br>Location<br></br>Package
        </div>
      </div>
    </div>
  );
}

export default Sinimg;
