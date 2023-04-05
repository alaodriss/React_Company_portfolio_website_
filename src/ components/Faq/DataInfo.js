import React, { useState } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";
import "./Career.css";

const DataInfo = ({ title, body }) => {
  //show data
  const [show, setShow] = useState(false);

  return (
    <div className={show ? "post-card-open" : "post-card"} onClick={() => setShow(!show)}>
      <div className="collapse-option">
        <h6>{title}</h6>
        <p>{show ? <FcExpand size={20} /> : <FcCollapse size={20} />}</p>
      </div>
      <div className="description">{show ? <p>{body}</p> : null}</div>
    </div>
  );
};

export default DataInfo;
