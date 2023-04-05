import React from "react";
import "./About.css";
import about from "../../assets/image.jpg";
import { FcStart } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcDribbble } from "react-icons/fc";
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div id="about" className="container about-section">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <Fade left>
          <div className="about-image">
            <img src={about} height="400px" width="400px" alt="img" />
          </div>
          </Fade>
        </div>
        <Fade right>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about_details">
            <div className="about-title">
              <h5> About</h5>
              <span className="line"></span>
            </div>
            <p className="">
              script est utile pour les personnes désirant obtenir du contenu
              rapidement, il est plutôt réservé aux développeurs web.
            </p>
            <div className="card-design">
              <div className="about-list-item">
                <div className="about-detalis-icon">
                  <p>
                    <FcStart size={50} />
                  </p>
                </div>
                <div>
                  <h6>Perfect day out</h6>
                  <p>
                    script est utile pour les personnes désirant obtenir du
                    contenu rapidement,
                  </p>
                </div>
              </div>
            </div>

            <div className="card-design">
              <div className="about-list-item">
                <div className="about-detalis-icon">
                  <p>
                    <FcComboChart size={50} />
                  </p>
                </div>
                <div>
                  <h6>Perfect day out</h6>
                  <p>
                    script est utile pour les personnes désirant obtenir du
                    contenu rapidement,
                  </p>
                </div>
              </div>
            </div>

            <div className="card-design">
              <div className="about-list-item">
                <div className="about-detalis-icon">
                  <p>
                    <FcDribbble size={50} />
                  </p>
                </div>
                <div>
                  <h6>Perfect day out</h6>
                  <p>
                    script est utile pour les personnes désirant obtenir du
                    contenu rapidement,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
