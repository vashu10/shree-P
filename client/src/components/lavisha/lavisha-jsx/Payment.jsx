import React from "react";
import "../css/paym.css";

import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import paytm from "../images/paytm.png";
import upi from "../images/upi.png";
import google from "../images/google.png";
function Payment() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="left">
            <h3>Order Summary</h3>
            <div className="orders">
              <div>
                <img src=""></img>
                <div>
                  <h4>Deluxe Package</h4>
                  <p>Rs 22000</p>
                </div>
              </div>
              <div>
                <img src=""></img>
                <div>
                  <h4>Teaser</h4>
                  <p>Rs 1000</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <form className="coupone">
                  <input type="text" placeholder="Add Coupone Code"></input>

                  <button type="submit" value="submit">
                    Apply
                  </button>
                </form>
              </div>
            </div>
            <div className="pricename">
              <div>
                <p>Subtotal</p>
                <p>Tax</p>
                <h3>Total</h3>
              </div>
              <div>
                <p>Rs 23000</p>
                <p>Rs 1000</p>
                <h3>RS 24000</h3>
              </div>
            </div>
          </div>
          <div className="right">
            <h3>PAYMENT</h3>
            <form className="rightform">
              Accepted Card <br />
              <img src={card1} width="100"></img>
              <img src={card2} width="50"></img>
              <br />
              <br />
              Credit card number
              <input
                type="text"
                name=""
                placeholder="Enter card number"
              ></input>
              Exp month
              <input type="text" name="" placeholder="Enter Month"></input>
              <div id="zip">
                <label>
                  Exp year
                  <select>
                    <option>Choose Year..</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                  </select>
                </label>
                <label>
                  CVV
                  <input type="number" name="" placeholder="CVV"></input>
                </label>
              </div>
            </form>
            <input type="submit" name="" value="Proceed to Checkout"></input>
            <div className="upi">
              <input type="radio" name=""></input>
              <h4>Pay With UPI</h4>

              <div className="pay">
                <img src={paytm} width="43"></img>
                <img src={upi} width="43"></img>
                <img src={google} width="43"></img>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Payment;
