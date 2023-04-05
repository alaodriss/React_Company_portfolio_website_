import React from "react";
import "./Subscription.css";
import { BsFillSendCheckFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Subscription = () => {
  return (
    <div id="subscription" className="containr-fluid subscription">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <Fade>
              <div className="subscription_title">
                <h5>New Lettre Subscription today</h5>
              </div>
              <div className="subscription-form">
                <input
                  type="text"
                  placeholder="Subscription with your E-mail"
                />
              </div>
              <div className="subscription_button">
                <p>
                  subscription <BsFillSendCheckFill />{" "}
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
