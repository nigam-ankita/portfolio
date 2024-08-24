import React from 'react'
import img1 from '../../assets/img/image-1.png';
function HeroSection() {
  return (
    <div>
        <div className="container mt-5 pt-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-7 text-center text-md-start">
                <p className="fs-5 fw-semibold">Hi I am</p>
                <h6 className="fs-3 text-danger fw-bold">Muhammad Bin Jamee!</h6>
                <h1 className="display-4 fw-bold">UI & UX Designer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint iure reprehenderit. Vel reiciendis dolores maxime praesentium esse vero dolor!</p>
                <button className="btn btn-danger" type="button">Hire Me</button>
                </div>
                <div className="col-md-4 hero-img" >
                <img src={img1} alt="" className="img-fluid "/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection