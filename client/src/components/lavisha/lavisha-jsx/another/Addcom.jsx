import React from "react";
// import ReactDOM from "react-dom";
import Citsta from "../another/Citsta";
import Card from "../another/Card";
import Cdata from "../another/Cdata";
import Text from "../another/Text";
import Hrcard from "../another/Hrcard";
import "../../../lavisha/css/Frame13.css"; 
// import mg5 from "../frame13/image/mg5.png";
function ncard(val) {
  return (
    <Card
      imgsrc={val.imgscr}
      cname={val.cname}
      title={val.title}
      // shri={val.shri}
    />
  );
}
function Addcom() {
  return (
    <>
      <Citsta />
      <h1 className="heading_style">Cities</h1>
      <div className="cards">{Cdata.map(ncard)}</div>
      <Text />
      <Hrcard />
    </>
  );
}
export default Addcom;
