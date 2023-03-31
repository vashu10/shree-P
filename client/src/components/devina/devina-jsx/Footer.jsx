import React from 'react'
import '../css/Footer.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    useLocation
} from "react-router-dom";
const Footer = () => {
    return (
        <>
        <div className='footer-photo'>
            <div className='footer-devi'>
                <div className='now-book'>
                    NOW ACCEPTING BOOKING !
                </div>
                <div className='devi-category'>
                    <ul className='category-footer'>
                    <Link to='/vendors'>
                        <h1 className='heading-category'>Category</h1>
                        </Link>
                        <Link to='/vendors'>
                        <li className='category'>Cinematography</li>
                        </Link>
                        <Link to='/vendors'>
                        <li className='category'>Pre-Wedding Shots</li>
                        </Link>
                        <Link to='/vendors'>
                        <li className='category'>Candid Photography</li>
                        </Link>
                        <Link to='/vendors'>
                        <li className='category'>Wedding Photography</li>
                        </Link>
                    </ul>
                    <ul className='devi-home'>
                    <Link to='/'>
                        <h1 className='heading-home'>Home</h1>
                        </Link>
                        <Link to='/city'>
                        <li className='home'>City</li>
                        </Link>
                        <Link to='/about'>
                        <li className='home'>About</li>
                        </Link>
                        <Link to='/vendors'>
                        <li className='home'>Category</li>
                        </Link>
                        <Link to='/signup_as_vendor'>
                        <li className='home'>Signup/Login</li>
                        </Link>
                    </ul>
                    <ul className='devi-support'>
                        <h1 className='heading-supoort'>Support</h1>
                        <Link to='/about'>
                        <li className='support' >Contact us</li>
                        </Link>
                        <Link to='/about'>
                        <li className='support'>Support Request</li>
                        </Link>
                    </ul>
                    <ul className='devi-social'>
                        <h1 className='heading-social'>Social</h1>
    
                        <Link to="https://www.youtube.com/channel/UCH0zn7WKzGMNCsVnPEFc1Mg" target='_blank'>
                        <li className='social'>Youtube</li>
                        </Link>
                        <Link to="https://www.linkedin.com/company/360webzone/mycompany/" target='_blank'>
                        <li className='social'>LinkedIn</li>
                        </Link>
                        <Link to="https://instagram.com/360webzone.academy?igshid=YmMyMTA2M2Y=" target='_blank'>
                        <li className='social'>Instagram</li>
                        </Link>
                        <Link to="https://wa.me/7415331652"
        
        target="_blank"
      >
                        <li className='social'>Whatsapp
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
        <div className='shri-photo-terms'>
                    <div className='shri-photo'>
                        2023 SHRI photography
                    </div>
                    <div className='shri-terms'>
                        Terms & Conditions | Policy
                    </div>
                </div>
            <div className='footer-image'>
              <pic1/>
            </div>
        </>
    )

}

export default Footer