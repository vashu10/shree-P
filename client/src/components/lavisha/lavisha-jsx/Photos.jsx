import React from "react";
import Text from "./Text";
import "../css/frame.css";
import im2 from "../images/im2.png";
import im8 from "../images/im8.png";
import im1 from "../images/im1.png";
import im9 from "../images/im9.png";
import im3 from "../images/im3.png";

function Photos() {
  return (
    <div>
      <div className="container">
        <img className="im2" src={im8} alt=""></img>
        <img className="im1" src={im1} alt=""></img>

        <div className="content">
          <h1>MARKING YOUR</h1>
          <h1>MEMORIES UNFORGETTABLE</h1>
        </div>
        <Text />
        <p className="tou">
          <u>GET IN TOUCH!</u>
        </p>
      </div>
      <div className="im34">
        <div className="im3">
          <img className="png3 zoom-in" src={im3} alt=""></img>
          <p className="nam1">Mr.Tiwari & Mrs. Sharma</p>
        </div>
        <div className="im4">
          <img className="png4 zoom-in" src={im2} alt=""></img>
          <p className="nam2">Mr.Tiwari & Mrs. Sharma</p>
        </div>
      </div>
      <div className="im5">
        <img className="png5 zoom-in" src={im9} alt=""></img>;
        <p className="nam5">Mr.Tiwari & Mrs. Sharma</p>
      </div>
    </div>
  );
}
export default Photos;
