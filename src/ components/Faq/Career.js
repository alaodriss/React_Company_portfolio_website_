import React, { useEffect, useState } from "react";
import DataInfo from "./DataInfo";
import "./Career.css";
import Pagination from "../Pagination/Pagination";
const Career = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);

  // for pagination

  const PER_PAGE = 7;
  const [currentPage, setCurrentPage] = useState(1);
  // Invoke when user click to request another page.
  const handlePageClick = ({selected: selectedPage}) => {
    setCurrentPage(selectedPage)
  }


  // from an API endpoint with useEffect and useState)
  const endOffset = currentPage * PER_PAGE ;
  const currentPageData = data.slice(endOffset, endOffset + PER_PAGE );
  const pageCount = Math.ceil(data.length / PER_PAGE);


  const loadPostData = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setData(result);
          console.log(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadPostData();
  }, []);

  return (
    <div className="container career" id="career">
      <div className="section_title">
        <h5> Career</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data &&
          currentPageData.map((item, index) => (
            <div
              className="col-xl-12 col-lg-12 col-md-12 col-sm-12"
              key={index}
            >
              <DataInfo {...item} />
              {/* <DataInfo title={item.title} body={item.body}/> */}
            </div>
          ))}
      </div>
      <div className="pagination-details"> 
      <Pagination   handlePageClick={handlePageClick} pageCount={pageCount}/>
      </div>
    </div>
  );
};

export default Career;
