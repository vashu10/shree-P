import React, { useState } from "react";
// import {Link} from "react-router-dom"
import "../css/Home.css";
import pic1 from "../images/Image/pic1.png";
import pic2 from  "../images/Image/pic2.png";
import pic3 from  "../images/Image/pic3.png";
import pic4 from  "../images/Image/pic4.png";
import pic5 from  "../images/Image/pic5.png";
import pic6 from  "../images/Image/pic6.png";
import pic7 from  "../images/Image/pic7.png";
import pic8 from  "../images/Image/pic8.png";
import Profile_part from "../../user_profile/jsx/Profile_part";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    useLocation
} from "react-router-dom";



export default function List({ post }) {
    
    return(
   <div className="post">
    
       <div className="vendor-cards-image-devi">
                         {post.photo && (
                            <img className="vendor-images-devi" src={post.collection_img} alt="" />
                         )}
                        <Link to={`/post/${post._id}`}>
                        <div className="vendor-title">{post.username}</div>
                        <div className="vendor-subtitle">{post.category}</div>
                        <div className="vendor-price">
                            Rs. {post.basic_price} <span className="perday">per day</span>
                        </div>
                        </Link>
                      
                    </div>
                
            </div>
            
                
    )
                    
}