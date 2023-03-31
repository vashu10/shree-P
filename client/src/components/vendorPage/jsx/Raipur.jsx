import React,{useEffect, useState} from 'react'
import '../css/Vendors_page.css'

import {

   
    useLocation,
    
} from "react-router-dom";
import Post from '../../Home_page/jsx/Post';
import axios from 'axios';

const Raipur = () => {
    
    const [posts,setPosts]=useState([])
    const {search}=useLocation()
   useEffect(()=>{
       const fetchPosts=async()=>{
         const res= await axios.get("/posts"+search)
        //  console.log(res)
         setPosts(res.data)
       }
       fetchPosts()
   },[search])
    
    
    
  return (
    <>
    


    <div>
    <div className="vendors-heading">
            <h3>
                Wedding Photography

            </h3>

            <p>
                Showing Vendors around Raipur
            </p>
        </div>

       
      <div className="vendors_section">

      <div className="vendor_cards">
                
                {/* {posts.map((p)=>(
                      <Post post={p} />
                ))} */}



{               
                        posts
                      .filter((post) =>
                        post.city.includes("RAIPUR"))
                      .map((p) => (
                        <Post post={p} />))
}









                   

                
                
             </div>   
      </div>

      {/* <div className="revws">
        <Reviews    />
      </div> */}
    </div>

    
    
    </>
  )
}

export default Raipur