import React from "react";
import "../../../lavisha/css/Frame13.css"; 
import mg1 from "../another/image/mg1.png";

import mg4 from "../another/image/mg4.png";
import mg2 from "../another/image/mg2.png";

function Hrcard() {
  return (
    <div className="hr">
      <div className="hrcard">
        <div className="card_hero">
          <img className="hrcard_img hrcard1" src={mg1}></img>
          {/* <div className="card_middle">
                        <p className="card_middle-text">Location matters more then you think when it comes to capture any kind of moments</p>
                    </div> */}
        </div>
        <div className="card_content">
          <div className="hrcard_info">
            <h2 className="card_head">Best Locations</h2>
            <p className="card_details">
              Location matters more then you think when it comes to capture any
              kind of moments
            </p>
          </div>
          <div className="card_buttons">
            <a href="a" className="card_btn">
              View More
            </a>
          </div>
        </div>
      </div>
      <div className="hrcard hrcard2">
        <div className="card_hero">
          <img className="hrcard_img hrcard_img2" src={mg4}></img>
          {/* <div className="card_middle">
                        <p className="card_middle-text">Location matters more then you think when it comes to capture any kind of moments</p>
                    </div> */}
        </div>
        <div className="card_content card_content2">
          <div className="hrcard_info">
            <h2 className="card_head">Best Locations</h2>
            <p className="card_details card_details2">
              Location matters more then you think when it comes to capture an
              kind of moments
            </p>
          </div>
          <div className="card_buttons">
            <a href="a" className="card_btn">
              View More
            </a>
          </div>
        </div>
      </div>
      <div className="hrcard hrcard2 hrcd3">
        <div className="card_hero">
          <img className="hrcard_img hrcard_img3" src={mg2}></img>
          {/* <div className="card_middle">
                        <p className="card_middle-text">Location matters more then you think when it comes to capture any kind of moments</p>
                    </div> */}
        </div>
        <div className="card_content">
          <div className="hrcard_info">
            <div className="shrihidden">
              <span className="shri"> SHRI </span>
              <span> Photoghrapy </span>
            </div>
            <h2 className="card_head" style={{ fontSize: "40px" }}>
              Professional
              <br />
              Photographers
            </h2>
            <p className="card_details">
              Our professional photographers provide you the best locations to
              capture your beautiful and stunnning pictures
            </p>
          </div>
          <div className="card_buttons">
            <a href="a" className="card_btn">
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hrcard;
