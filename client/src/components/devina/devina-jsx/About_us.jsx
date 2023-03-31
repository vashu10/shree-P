import React from "react";
import "../css/About_us.css"
import img1 from "../images-aboutus/pic1.png";
import img2 from "../images-aboutus/pic2.png";
import img3 from "../images-aboutus/pic3.png";
import img4 from "../images-aboutus/leave.png";
import img5 from "../images-aboutus/flower.png";
import img6 from "../images-aboutus/mountain.png";
import img7 from "../images-aboutus/shree.png";
import img8 from "../images-aboutus/shweta.png";
import img9 from "../images-aboutus/hello.png";

const About_us = () => {
  return (
    <>
      <div className="about-container">
        <div className="hello-heading">HELLO</div>
        <div className="hello-heading-1">WE ARE HAPPY TO SEE YOU HERE</div>
        <p className="hello-para">
          “Photography for me is not looking, it's feeling. <br />
          If you can't feel what you're looking at, then you're never <br />
          going to get others to feel anything when they look at your pictures.”
        </p>
        <div className="about-start-images">
          <div className="image-1">
            <img className="image1.1" src={img1} alt="" width={400} height={281} />
          </div>
          <div className="image-2">
            <img className="image-1.2" src={img2} alt="" width={400} height={281} />
          </div>
        </div>
        <div className="get-started">HOW DO WE GET STARTED</div>
        <p className="started-para">
          Photography has become an omnipresent art and activity today.
          <br />
          It has moved from being a specialized art in the hands of a skilled
          photographer,
          <br />
          to being a daily use activity in the hands of each and every common
          man.
        </p>
        <div className="image-started">
          <div className="image-3">
            <img src={img3} alt="" />
          </div>
          <div className="image-4">
            <img src={img4} alt="" />
          </div>
          <div className="image-5">
            <img src={img5} alt="" />
          </div>
          <div className="image-6">
            <img src={img6} alt="" />
          </div>
        </div>
        <div className="our-team">OUR TEAM</div>
        <div className="images-team">
          <div>
            <img src={img7} alt="" width={300} height={500} />
          </div>
          <div>
            <img src={img8} alt="" width={300} height={500} />
          </div>
          <div>
            <img src={img9} alt="" width={300} height={500} />
          </div>
        </div>
        <div className="why-choose-us">
          <h1 className="why-heading">WHY CHOOSE US?</h1>
          <div className="inner-why">
            <div className="quality-photoshoot-devi">
              <h1 className="quality-heading">QUALITY PHOTOSHOOT</h1>
              <p className="quality-para">
                We provide you the best <br />
                and premium quality
                <br /> content in the whole <br /> market.{" "}
              </p>
            </div>
            <div className="quality-photoshoot-devina">
              <h1 className="quality-heading">ONLINE FLEXIBILTY</h1>
              <p className="quality-para">
                Using innvative
                <br /> technology our website
                <br /> help you to explore the <br />
                no of categories and <br /> help you to book
                <br /> photoshoots easily.{" "}
              </p>
            </div>
            <div className="quality-photoshoot">
              <h1 className="quality-heading">COLLABORATIVE CONNECTIONS</h1>
              <p className="quality-para">
                We provide you the best <br /> and premium quality <br />
                content in the whole <br />
                market.
              </p>
            </div>
          </div>
        </div>
        <div className="contact-us-container">
          <p className="contact-heading">CONTACT</p>

          <form action="">



          <div className="formBox">
            <div className="row50">
              <div class="inputBox">
                <span>First Name</span>
                <input type="text" placeholder="Your first name" />
              </div>

              <div class="inputBox">
                <span>Last Name</span>
                <input type="text" placeholder="Your last name" />
              </div>
            </div>

            <div class="row50">
              <div class="inputBox">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{ width: "72vw" }}
                />
              </div>
            </div>
            <div class="row50">
              <div class="inputBox">
                <span>Subject</span>
                <input
                  type="email"
                  placeholder="Your Subject"
                  style={{ width: "72vw" }}
                />
              </div>
            </div>
            <div class="row50">
              <div class="inputBox">
                <span>Message</span>
                <textarea
                  placeholder="Write Your Message Here..."
                  style={{ width: "72vw" }}
                ></textarea>
              </div>
            </div>

            <div className="about-us-submit">
              <input type="submit" name="Send" value='Send'  />
            </div>
          </div>
              
          </form>
        </div>
      </div>
    </>
  );
};

export default About_us;