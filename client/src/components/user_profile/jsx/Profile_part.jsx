import React from 'react';
import axios from "axios";
import "../css/Profile_part.css"
import profile_img from "../Images/gm/Ellipse 15.png"
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router';
import PlaceIcon from '@mui/icons-material/Place';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    BrowserRouter,
    
} from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import ShareIcon from '@mui/icons-material/Share';


import Photos from '../jsx/Photos'


import cover_img from "../Images/gm/Rectangle 124.png"

import Offers_basic from './Offers_basic'
import Offers_standard from './Offers_standard'
import Offers_premium from './Offers_premium'
import Reviews from './Reviews'
import Description from './Description'
import { Recent_work } from './Recent_work'


export default function Profile_part(){
//    const {user} = useContext(Context)
  const location = useLocation()
  console.log(location)
  const path = location.pathname.split("/")[2];

  const [post,setPost]=useState({})

  useEffect(()=>{
    const getPost =async()=>{
        const res =await axios.get("/posts/"+path);
        setPost(res.data)
    };
    getPost()
  },[path])

  
    const [Click, setClick] = useState('Basic');

    // const [active, setactive] =  useState("");
 

    if(Click==='Basic'){

        var btnClasses=['pricing_top_heading', 'head_one', 'active_head'];

    }
    else if(Click==='Standard'){

        var btnClasses=['pricing_top_heading', 'head_tow', 'active_head'];

    }
    else if(Click==='Premium'){

        var btnClasses=['pricing_top_heading', 'head_three', 'active_head'];

    }
  
    

    return (
        <>


            <div className="main_profile">

                <div className="profile_left">


                    <div className="profile_text">
                        <h3 className='profile_heading'>{post.username}</h3>




                        <div className="profile_catg">
                            <ul className='profile_ul'>
                                <li>{post.sub_cat1}</li>
                                <li>{post.sub_cat2}</li>
                                <li>{post.sub_cat3}</li>
                            </ul>
                        </div>

                    </div>


                    <div className="profile_rating">
                        <h4>{post.category}</h4>
                    </div>




                </div>





                <div className="profile_right">
                    <div className="profile_picture" >
                       
                        <img src={profile_img} alt="profile_img" />
                        
                    </div>
                </div>

            </div>



            <div className="down_banner">
                <ul className='ul_banner'>


                <li className="li_banner">
                <span>
                    <PlaceIcon  />
                </span>
                {post.city}</li>
                <li className="li_banner">
                
                <span>
                    <AddIcCallIcon  />
                </span>

                +91{post.phoneno}</li>
                <li className="li_banner">
                
                <span>
                    <AddToPhotosIcon />
                </span>

                  
                    123 photos
                  


                </li>
                <li className="li_banner">
                
                <span>
                    <FavoriteBorderIcon />
                </span>

                booklist</li>
                <li className="li_banner">
                
                <span>
                    <ShareIcon  />
                </span>

                Share</li>


                </ul>
            </div>
            

            <div className="profile_container">
            <div className="profile_container_left">

            <div className="left_heading">
                <h4>
                {post.gig_title}                </h4>
            </div>

            <div className="left_title">
                <img src={profile_img} alt="profile_img" />
                <h4>Best Seller</h4>
               <div className="stars">
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <span>(4.5)</span>
                <span>20 Reviews</span>
               </div>

               

            </div>

            <div className="slider_imgs">

            <img src={cover_img} alt=""  />




            </div>



            </div>
            
            <div className="profile_container_right">

            <div className="pricing">
                <div className="pricing_top">
                    <div className="pricing_top_heading head_one active_head" 
                    onClick={()=> setClick('Basic')
                                
                    
                    }>
                        Basic
                    </div>
                    <div className="pricing_top_heading head_two"
                    onClick={()=> setClick('Standard') 

                

                        }

                       
                        >
                    Standard</div>
                    <div className="pricing_top_heading head_three "   
                    onClick={()=> setClick('Premium') 

                    } 
                     >Premium</div>
                </div>

                {Click==="Basic" && <Offers_basic  /> }
               
                {Click==="Standard" && <Offers_standard /> }

                {Click==="Premium" && <Offers_premium /> }
              


            </div>

            </div>



        </div>


        <div className="basic-description">

            <Description />
        </div>




        
    <div className="vendor-reviews">
        <Reviews />
    </div>


    <div className="recent-worl">
        <Recent_work    />
    </div>









        </>
    )
}
