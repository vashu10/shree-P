import React from "react";
import "../css/Photo.css";
import img19 from "../images/Image/img19.png";
import im1 from "../images/Image/im1.png";

function Photo() {
  return (
    <div>
      <div className="container-lav">
        <div>
          <img className="im2" src={img19} alt=""></img>
        </div>
        <div className="secound">
          <img className="im1" src={im1} alt=""></img>

          <div className="content">
            <h1>MARKING YOUR</h1>
            <h1>MEMORIES UNFORGETTABLE</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Photo;
