
import React, { useState } from "react";
import img2 from "../../assets/img/3.png";


function Project({ProjectData}) {

  const [items, setItems] = useState(ProjectData);

  const filterItem = (category) => {
    if (category === "all") {
      setItems(ProjectData);
    } else {
      const newItems = ProjectData.filter((item) => item.category === category);
      setItems(newItems);
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-12">
            <h1>My Projects</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Imperdiet consectetur
              blandit felis ligula egestas consectetur gravida sagittis
              maecenas.
            </p>
          </div>
        </div>
        <div className="row text-center mb-4">
          <div className="col-12">
            <button
              className="btn btn-outline-dark filter-btn m-2"
              onClick={() => filterItem("all")}
            >
              All
            </button>
            <button
              className="btn btn-outline-dark filter-btn m-2"
              onClick={() => filterItem("uiux")}
            >
              UI UX
            </button>
            <button
              className="btn btn-outline-dark filter-btn m-2"
              onClick={() => filterItem("webdesign")}
            >
              Website Design
            </button>
            <button
              className="btn btn-outline-dark filter-btn m-2"
              onClick={() => filterItem("appdesign")}
            >
              App Design
            </button>
            <button
              className="btn btn-outline-dark filter-btn m-2"
              onClick={() => filterItem("graphicdesign")}
            >
              Graphic Design
            </button>
           
          </div>
        </div>
        <div className="row justify-content-center">
          {items.map((obj) => (
            <div className="col-md-3 mb-4" key={obj.id}>
              <div className="card">
                <img src={img2} className="card-img-top" alt="Project Image" />
                <div className="card-body">
                  <h5 className="card-title">{obj.tital}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;

