import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
    <div id="footer" className="container-fluid footer">
      <div className="container">
        <div className="row">
          <Zoom>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="footer-about-section">
                <h6 style={{ color: "white", marginTop: "20px" }}>About</h6>
                <p>
                  script est utile pour les personnes désirant obtenir du
                  contenu rapidement, il est plutôt réservé aux développeurs
                  web. En effet, en plus de générer du texte, il génère
                  également un squelette HTML ainsi que des balises HTML
                  pré-remplies afin d'accroitre la vitesse de programmation en
                  évitant de perdre du temps dans le remplissage de celles-ci.
                </p>

                <span className="footer-social-icons">
                  <p>
                    <BsFacebook size={25} />
                  </p>
                  <p>
                    <BsInstagram size={25} />
                  </p>
                  <p>
                    <BsLinkedin size={25} />
                  </p>
                </span>

                {/* <span className="footer-social-icons">
                <p>
                  <BsFacebook size={30} />
                </p>
                <p>
                  <BsInstagram size={30} />
                </p>
                <p>
                  <BsLinkedin size={30} />
                </p>
              </span> */}
              </div>
            </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-service">
              <h6 style={{ color: "white", marginTop: "20px" }}>Service</h6>
              <div className="footer-item">
                <li>Product Sort</li>
                <li> meida Marketing</li>
                <li>Innvovation</li>
                <li> Technology</li>
                <li> Environment </li>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-service">
              <h6 style={{ color: "white", marginTop: "20px" }}>
                Customer care
              </h6>
              <div className="footer-item">
                <li>Login</li>
                <li> My Account</li>
                <li>Wish List</li>
                <li> FAQ</li>
                <li> Contact us</li>
              </div>
            </div>
          </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Footer;
