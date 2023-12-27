import React from "react";
import { useState } from "react";
import "./Dashbaord.css";

const Dashboard = (props) => {
  const { surveys } = props;

  return (
    <div className="dashboard ">
      <div className="row text-center h-75 " id="main">
        <div className="col-12 col-sm-12 p-0  bg-primary">
          <div className="listcontainer px-2">
            <div class="accordion accordion-flush my-5" id="accordionFlushExample">
              {surveys.map((pat, index) => {
                return (
                  <div class="accordion-item mx-1 my-3">
                    <h5
                      class="accordion-header p-0 m-0"
                      id={`flush-headingOne${index}`}
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapseOne${index}`}
                      >
                        <div className="row w-100 ">
                          <div className="col-md-4  my-1">
                            <span className="h6">Name:</span>
                            {pat.name}
                          </div>
                          <div className="col-md-4  mt-"><span className="h6">Email: </span>{pat.email}</div>
                         
                          <div className="col-md-4 mt-1">
                           <span className="h6"> Nationality: </span>{pat.nationality}
                          </div>
                        </div>
                      </button>
                    </h5>
                    <div
                      id={`flush-collapse${index}`}
                      class="accordion-collapse collapse"
                      aria-labelledby={`flush-heading${index}`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body p-1 text-start">

                        <div className="row">

                          <div className="col-sm-4 my-2">
                            <span className="h6">Message: </span>
                            {pat.message}
                          </div>

                          <div className="col-sm-3 my-2 ">
                            <span className="h6">Address: </span>
                            {pat.address}
                          </div>
                           

                          <div className="col-md-3 mt-1"><span className="h6">Phone: </span>{pat.phone}</div>
                          <div className="col-md-3 mt-1">
                            <span className="h6">Gender:</span>{pat.gender}
                          </div>




                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
