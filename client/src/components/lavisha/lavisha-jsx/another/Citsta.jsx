import React from "react";
import "../../../lavisha/css/Frame13.css"; 
import mg3 from "../another/image/mg3.png";

function Citsta() {
  return (
    <div className="maindiv">
      <div className="secmain">
        <img className="image" src={mg3} alt=""></img>
      </div>
      <div className="citsta">
        <div className="cit">
          <h1 className="sta">Cities and States</h1>
          <p>
            Shri photography offers you highest quality of photographers <br />
            and videographers who will capture your best memories
          </p>
        </div>
      </div>
      <div className="maincard">
        <div className="card1">
          <h2>5+</h2>
          <p>
            We provide you more than five categories such as wedding, pre
            wedding etc
          </p>
        </div>
        <div className="card1" style={{ backgroundColor: "#D3D3D3" }}>
          <h2>3+</h2>
          <p>
            Currently we are serving in thre cities of chhattisgharh,
            Raipur,Bhalai & Durg
          </p>
        </div>
        <div className="card1">
          <h2>1000+</h2>
          <p>
            We have more than <br />
            1000+
            <br /> happy customers as of now
          </p>
        </div>
      </div>
    </div>
  );
}
export default Citsta;
