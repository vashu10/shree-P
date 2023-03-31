import React from 'react'
import '../css/Vendors_page.css'


import Post from '../../Home_page/jsx/Post';

const Vendor_list=({posts})=>{

  console.log(posts);

  
  return (
    <div>
    <div className="vendors-heading">
            <h3>
                Wedding Photography

            </h3>

            <p>
                Showing Vendors around you
            </p>
        </div>

       
      <div className="vendors_section">

      <div className="vendor_cards">
                
                {posts.map((p)=>(
                      <Post post={p} />
                ))}



                {/* {
                    posts
                    .filter((post) =>
                      post.city.includes(`${Cdata.cname}`))
                    .map((p) => (
                      <Post post={p} />



                    ))} */}


                
                
             </div>   
      </div>

      {/* <div className="revws">
        <Reviews    />
      </div> */}
    </div>

  )
}

export default Vendor_list