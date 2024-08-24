import React from "react";

function Service({ cardData }) {
  return (
    <div>
      <div className="container mt-5 text-center">
        <div className="col-12">
          <h1>Services</h1>
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nam, quod!
          </p>
        </div>

        <div className="row">
           

          {cardData.map((obj) => (
            <div className="col-md-3 mb-4" key={obj.id}>
              <div className="card-body p-4 rounded-4 text-dark">
                <div className="feature text-lg-start">
                  <i className="fas fa-globe fs-2 text-danger"></i>
                  <h3 className="fs-4 mt-3 text-dark">{obj.title}</h3>
                  <p>{obj.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
