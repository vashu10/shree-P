import React from "react";
import Shri from "./Shri";
// import "../another/css/Frame13.css";
// import mg5 from "../frame13/image/mg5.png";
import "../../../lavisha/css/Frame13.css"; 
import { useParams } from "react-router";
import { Link } from "react-router-dom";
function Card(props) {

  
  let{cityId}=useParams();

  return (
    <div className="card">
      <img src={props.imgsrc} alt="" className="card_img"></img>
      <Shri />

      <div className="card_info">
        <p className="card_title">{props.cname}</p>
        <p className="card_category">{props.title}</p>
        {/* <div>
          <p className="shri">{props.shri}</p>
        </div> */}
        <Link to={`/vendors/${props.cname}`} >
          <button className="button">Explore More</button>
        </Link>
      </div>
    </div>
  );
}
export default Card;
