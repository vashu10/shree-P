import React from 'react'
import "../css/reviews.css"

import review_img from "../Images/gm/Ellipse 15.png"

// import StarIcon from '@mui/icons-material/Star';

const Reviews = () => {
  return (
    <>

    <div className="reviews-sections">

    <p className="review-txt">
        Reviews
        <span className="stars up">
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
            </span>
    </p>

    <div className="single-section">

        <div className="reviewer-names">
            <span className="reviewer-img">

            <img src={review_img} alt="" srcset="" />

            

            </span> <p className='reviewer-name'>

             Martina
            </p>

            <br />

            
            <div className=" stars stars-review">
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
            </div>

            <span className="days">
                5 days ago
            </span>

</div>

<div className="main-review">


            <p className="main-review-p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sapiente sequi dolore facilis consequuntur deleniti nisi corporis, dolor dicta iusto fuga praesentium dolorem temporibus eos harum magnam, culpa commodi accusamus.
            </p>



        </div>


        <div className="review-seller">

        <div className="seller">

        <span className="reviewer-img">

        <img src={review_img} alt="" srcset="" />

            </span>
            
            <p className="seller-name">

             Seller's Response
            </p>




        </div>

        <div className="seller-response">

            <p>
                Thank you so much ! 
            </p>
        </div>

        </div>
    </div>








    <hr />






    




    <div className="single-section">

        <div className="reviewer-names">
            <span className="reviewer-img">

            <img src={review_img} alt="" srcset="" />

            

            </span> <p className='reviewer-name'>

             Martina
            </p>

            <br />

            
            <div className=" stars stars-review">
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
            </div>

            <span className="days">
                5 days ago
            </span>

</div>

<div className="main-review">


            <p className="main-review-p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sapiente sequi dolore facilis consequuntur deleniti nisi corporis, dolor dicta iusto fuga praesentium dolorem temporibus eos harum magnam, culpa commodi accusamus.
            </p>



        </div>


        <div className="review-seller">

        <div className="seller">

        <span className="reviewer-img">

        <img src={review_img} alt="" srcset="" />

            </span>
            
            <p className="seller-name">

             Seller's Response
            </p>




        </div>

        <div className="seller-response">

            <p>
                Thank you so much ! 
            </p>
        </div>

        </div>
    </div>




    </div>


    





    




    </>
  )
}

export default Reviews