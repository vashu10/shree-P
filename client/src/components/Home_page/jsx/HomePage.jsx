import React, { useEffect, useState } from "react";
import "../css/Home.css";
import Post from "./Post";
import { useDispatch } from 'react-redux'
import pic1 from "../images/Image/pic1.png";
import pic2 from  "../images/Image/pic2.png";
import pic3 from  "../images/Image/pic3.png";
import pic4 from  "../images/Image/pic4.png";
import pic5 from  "../images/Image/pic5.png";
import pic6 from  "../images/Image/pic6.png";
import pic7 from  "../images/Image/pic7.png";
import pic8 from  "../images/Image/pic8.png";




const HomePage = ({posts}) => {
    

    return (
        <div className="devi-homepage">
            <div className="search-section-devi">
                <div className="home-search-devi">
                    <div className="sub-home-search-devi">
                        <div className="title-search-devi">
                            <p className="title-search-devi-text">
                                Capturing Life's Precious Moments
                            </p>
                        </div>
                        <div className="search-box-devi"><input className="input-search-box-devi" type="search" placeholder="Search Vendors,City,Categories"  /> </div>
                        
                    </div>
                </div>
            </div>
            <div className="vendor-devi">
                <div className="vendor-heading">
                    <h1 className="vendor-heading-h1">Popular Vendor</h1>
                </div>
                <div className="vendor-card-devi">
                
                    {posts.map((p)=>(
                          <Post post={p}/>
                    ))}
                    
                 </div>   
                
            </div>
            <div className="home-devi">
                <div className="heading-devi-category">Popular Categories</div>
                <div className="card-home-devi">
                    <div className="category-card-devi">
                        <img
                            className="category-card-img-devi"
                            src={pic5}
                            alt=""
                        />
                        <div className="title">Wedding Photography</div>
                        <div className="sub-title">
                            Capture best moments of life
                        </div>
                    </div>
                    <div className="category-card-devi">
                        <img
                            className="category-card-img-devi"
                            src={pic6}
                            alt=""
                        />
                        <div className="title">Cinematography</div>
                        <div className="sub-title">
                            Every frame is important
                        </div>
                    </div>
                    <div className="category-card-devi">
                        <img
                            className="category-card-img-devi"
                            src={pic7}
                            alt=""
                        />
                        <div className="title">Pre-Wedding Shoots</div>
                        <div className="sub-title">
                            Capture new chapters of life
                        </div>
                    </div>
                    <div className="category-card-devi">
                        <img
                            className="category-card-img-devi"
                            src={pic8}
                            alt=""
                        />
                        <div className="title">Candid Photography</div>
                        <div className="sub-title">
                            Stress less and enjoy the best
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
