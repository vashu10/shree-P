import React from 'react'
import "../css/Home.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    useLocation
} from "react-router-dom";
export default function Front({post}){
    return(
        <div className="post">
         
            <div className="vendor-cards-image-devi-front">
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