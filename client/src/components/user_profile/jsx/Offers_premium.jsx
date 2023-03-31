import React from 'react'
import "../css/Main_profile.css"
import axios from "axios";
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router';
const Offers_premium = () => {
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
  
  return (
    <>


<div className="main_part_pricing">
                   <div className="price">

                   <span >Premium</span>
                   <span>{post.pre_price}</span>

                   </div>
                   <div className="price_text">
                    <p>
                        1-80 photos will edit using Adobe tools
                    </p>
                   </div>

                   <div className="price_delivery">
                   <span >{post.pre_time}</span>
                   <span>1 Revison</span>

                   </div>

                   <ul className="checkLists">
                    <li className="checks">Traditional Photo</li>
                    <li className="checks">Traditional Video</li>
                    <li className="checks">Candid Photography</li>
                    <li className="checks">Wedding Video Invitation</li>
                    <li className="checks">Full HD Complete</li>
                   </ul>

                   <div className="next_btns">
                    <button className='Send_Message'>
                            Send Message
                    </button>

                    <button className='View_Contact'>
                            Contact-us: {post.phoneno}
                    </button>
                   </div>
                </div>






    </>
  )
}

export default Offers_premium