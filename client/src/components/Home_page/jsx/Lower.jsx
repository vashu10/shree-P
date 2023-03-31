import React from "react";
import img11 from "../images/Image/img11.png";
import img12 from "../images/Image/img12.png";
import img13 from "../images/Image/img13.png";
import img14 from "../images/Image/img14.png";
import img15 from "../images/Image/img15.png";
import img16 from "../images/Image/img16.png";
import img17 from "../images/Image/img17.png";
import img18 from "../images/Image/img18.png";
import "../css/Photo.css";

function Lower() {
  return (
    <div>
      <div className="heading">Recent Shoots</div>
      <div className="img-gallery">
        <div className="rowsec">
          <div className="grp">
            <img className="img" src={img11} alt=""></img>
            <img className="img" src={img12} alt=""></img>
          </div>
          <div className="grp">
            <img className="img" src={img13} alt=""></img>
            <img className="img" src={img14} alt=""></img>
          </div>
        </div>
        <div className="rowsec">
          <div className="grp">
            <img className="img" src={img15} alt=""></img>
            <img className="img" src={img16} alt=""></img>
          </div>
          <div className="grp">
            <img className="img" src={img17} alt=""></img>
            <img className="img" src={img18} alt=""></img>
          </div>
        </div>
      </div>
    
      <div className="search">
        <button type="submit" form="form1" value="Search">
          Search more
        </button>
      </div>
    </div>
  );
}

export default Lower;
