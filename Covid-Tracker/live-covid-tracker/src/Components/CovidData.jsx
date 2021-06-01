import React, { useEffect, useState } from "react";

const CovidData = () => {
  const [info, setInfo] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
      );
      const newData = await res.json();
      setInfo(newData);
      console.log(newData.regionData[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container ml-auto m-5">
        <div className="row text-center" style={{marginTop:"200px",marginLeft:"30px",fontFamily:"cursive"}}>
          <div className="col-3 m-2">
            <div className="card">
              <div className="card-header bg-warning">Our Country</div>
              <div className="card-body bg-dark text-white">
                <span>India</span>
              </div>
            </div>
          </div>
          <div className="col-3 m-2">
            <div className="card">
              <div className="card-header bg-warning">Total Cases</div>
              <div className="card-body bg-dark text-white">
                {info.totalCases}
              </div>
            </div>
          </div>
          <div className="col-3 m-2">
            <div className="card">
              <div className="card-header bg-warning">Active Cases</div>
              <div className="card-body bg-dark text-white">
                {info.activeCases}
              </div>
            </div>
          </div>
          <div className="col-3" style={{marginLeft:"180px",marginTop:"10px"}}>
            <div className="card">
              <div className="card-header bg-warning">Recovered</div>
              <div className="card-body bg-dark text-white">
                {info.recovered}
              </div>
            </div>
          </div>
          <div className="col-3"style={{marginTop:"10px"}}>
            <div className="card ">
              <div className="card-header bg-warning">Total Deaths</div>
              <div className="card-body bg-dark text-white">{info.deaths}</div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};
export default CovidData;
