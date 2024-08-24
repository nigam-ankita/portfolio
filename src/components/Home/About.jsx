import React from 'react'
import img1 from '../../assets/img/image-1.png'

function About() {
  return (
    <div>
    <div className="container mt-5 pt-5">
      <div className="row align-items-center justify-content-center ">
        <div className="col-md-5 text-center text-md-start about-img gap-2">
          <img src={img1} alt="Profile Picture" className="img-fluid" />
        </div>
        <div className="col-md-7">
          <h3>About Me</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, reiciendis! Reiciendis repellat qui animi cupiditate nostrum et veritatis dicta, totam unde, saepe tenetur aperiam ipsum!</p>
          <div class="mb-3">
            <label  className="form-label">UX</label>
            <div className="progress">
              <div className="progress-bar" role="progressbar"  aria-valuenow="87.5" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="mb-3">
            <label  class="form-label">Website Design</label>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div class="mb-3">
            <label  class="form-label">App Design</label>
            <div className="progress">
              <div className="progress-bar" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div class="mb-3">
            <label  class="form-label">Graphic Design</label>
            <div className="progress">
              <div className="progress-bar" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About