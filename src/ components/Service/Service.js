import React from "react";
import "./Service.css";

import { FcOk } from "react-icons/fc";

const Service = () => {
  const servicedate = [
    {
      id: 1,
      service1: "Web developpement",
      service2: "Mobile App developpement",
      service3: "Developpement web UX/ UI",
      service4: "Digitale Marketing",
    },
    {
      id: 2,
      service1: "Web developpement",
      service2: "Mobile App developpement",
      service3: "Developpement web UX/ UI",
      service4: "Digitale Marketing",
    },
    {
      id: 3,
      service1: "Web developpement",
      service2: "Mobile App developpement",
      service3: "Developpement web UX/ UI",
      service4: "Digitale Marketing",
    },
    {
      id: 4,
      service1: "Web developpement",
      service2: "Mobile App developpement",
      service3: "Developpement web UX/ UI",
      service4: "Digitale Marketing",
    },
    {
      id: 5,
      service1: "Web developpement",
      service2: "Mobile App developpement",
      service3: "Developpement web UX/ UI",
      service4: "Digitale Marketing",
    },
    {
      id: 6,
      service1: "Web developpement",
      service2: "Mobile App developpement",
      service3: "Developpement web UX/ UI",
      service4: "Digitale Marketing",
    },
    {
      id: 7,
      service1: "Web developpement",
      service2: "Mobile App developpement",
      service3: "Developpement web UX/ UI",
      service4: "Digitale Marketing",
    },
    {
      id: 8,
      service1: "Web developpement",
      service2: "Mobile App developpement",
      service3: "Developpement web UX/ UI",
      service4: "Digitale Marketing",
    },
  ];

  const colors = [
    "#008B8B", "#8B008B", "#BDB76B", "#FF1493", "#B22222", "#FFD700", "#CD5C5C","#FFF0F5"
  ]

  return (
    <div id="service" className="container seriver-section">
      {/* Section title */}
      <div className="section_title">
        <h5>Service</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {servicedate.map((item, index ) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
            <div className="services">

              <span className="service-number" style={{backgroundColor:colors[index]}}>
                <p>{item.id}</p>
              </span>

              <div className="list-of-service">
                <p>
                  <FcOk size={20} style={{ margin: "5px" }} /> {item.service1}
                </p>
                <span className="service_underline"></span>
                <p>
                  <FcOk size={20} style={{ margin: "5px" }} /> {item.service2}
                </p>
                <span className="service_underline"></span>
                <p>
                  <FcOk size={20} style={{ margin: "5px" }} /> {item.service3}
                </p>
                <span className="service_underline"></span>
                <p>
                  <FcOk size={20} style={{ margin: "5px" }} /> {item.service4}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
