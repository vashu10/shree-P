import React, { useState } from 'react'
import "../css/Main_profile.css"


import cover_img from "../Images/gm/Rectangle 124.png"

import profile_img from "../Images/gm/Ellipse 15.png"
import Offers_basic from './Offers_basic'
import Offers_standard from './Offers_standard'
import Offers_premium from './Offers_premium'
import Reviews from './Reviews'
import Description from './Description'
import { Recent_work } from './Recent_work'


const Main_profile = () => {


    const [Click, setClick] = useState('Basic');

    // const [active, setactive] = useState("");



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

        <div className="profile_container">
            <div className="profile_container_left">

            <div className="left_heading">
                <h4>
                    I will do beautiful wedding photography professionally
                </h4>
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

export default Main_profile