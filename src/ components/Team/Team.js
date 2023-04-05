import React from "react";
import "./Team.css";
import { BsFacebook, BsInstagram,  } from "react-icons/bs";
import { FaLinkedinIn} from "react-icons/fa";


const Team = () => {
  const data = [
    {
      id: 1,
      name: "jhona",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web.",
      img: "https://images.pexels.com/photos/1855579/pexels-photo-1855579.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      name: "Alexcandra",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web.",
      img: "https://images.pexels.com/photos/2080322/pexels-photo-2080322.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      name: "Muller",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web.",
      img: "https://images.pexels.com/photos/2125067/pexels-photo-2125067.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      name: "Jehon",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web.",
      img: "https://images.pexels.com/photos/2657843/pexels-photo-2657843.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      name: "Emliy",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web.",
      img: "https://images.pexels.com/photos/2177013/pexels-photo-2177013.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      name: "Alex",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web.",
      img: "https://images.pexels.com/photos/14697557/pexels-photo-14697557.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div id='team'className="container team-membres">
      <div className="section_title">
        <h5>Team Membres</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
            <div className="card team-members-item">
              <img src={item.img} alt="img" />
              <div className="team-info">
                <h6>{item.name}</h6>
                <p>{item.content}</p>
              </div>
              <span className="lien-for-team"></span>
              <div className="social-icons">
                <p>
                  <BsFacebook size={30} />
                </p>
                <p>
                  <BsInstagram size={30} />
                </p>
                <p>
                  <FaLinkedinIn size={30} />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
