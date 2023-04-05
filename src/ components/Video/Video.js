import React from "react";
import "./Video.css";

import ReactPlayer from "react-player";
import Zoom from "react-reveal/Zoom";

const Video = () => {
  const data = [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=O8tcWynTxaQ",
      title: "work process of our team",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=O8tcWynTxaQ",
      title: "work process of our team",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=O8tcWynTxaQ",
      title: "work process of our team",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=O8tcWynTxaQ",
      title: "work process of our team",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
    },
    {
      id: 5,
      url: "https://www.youtube.com/watch?v=O8tcWynTxaQ",
      title: "work process of our team",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
    },
    {
      id: 6,
      url: "https://www.youtube.com/watch?v=O8tcWynTxaQ",
      title: "work process of our team",
      content:
        "script est utile pour les personnes désirant obtenir du contenu rapidement, il est plutôt réservé aux développeurs web",
    },
  ];

  return (
    <div id="video" className="container video">
      {/* Section title */}
      <div className="section_title">
        <h5>Video</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <Zoom>
            <div className="col-xl-4 col-log-4 col-md-6 col-sm-12">
              <div className="video-details" key={index}>
                <ReactPlayer
                  controls
                  loop={true}
                  url={item.url}
                  width="auto"
                  height="300px"
                />
                <div className="video-content">
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Video;
