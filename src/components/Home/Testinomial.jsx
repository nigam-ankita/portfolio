import React, { useRef } from 'react';
import img3 from "../../assets/img/profile.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Testimonial() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
    
  };
  const containerStyle = {
    backgroundColor: '#f0f0f0', 
    padding: '40px',  
  };

  return (
    <div>
     <div className="container-fluid Testimonials text-center py-5 "style={containerStyle}>
            <h1>Testimonials</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum molestiae inventore est in, distinctio commodi repudiandae sequi optio ad provident.</p>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
            
          <div className="testimonial-card p-3 d-flex align-items-center rounded-4 justify-content-center gap-4">
            <img src={img3} alt="Profile" />
            <div>
              <p className="text-lg-start">Lorem ipsum dolor sit amet, consectetur adipis. <br />lacus laoreet tristique. Lorem ipsum dolor sit amet. <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, magnam!
              </p>
              <h4 className="text-lg-start">name</h4>
              <p className="text-lg-start">CEO</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonial-card p-3 d-flex align-items-center rounded-4 justify-content-center gap-4">
            <img src={img3} alt="Profile" />
            <div>
              <p className="text-lg-start">Lorem ipsum dolor sit amet, consectetur adipis. <br />lacus laoreet tristique. Lorem ipsum dolor sit amet. <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, magnam!
              </p>
              <h4 className="text-lg-start">name</h4>
              <p className="text-lg-start">CEO</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonial-card p-3 d-flex align-items-center rounded-4 justify-content-center gap-4">
            <img src={img3} alt="Profile" />
            <div>
              <p className="text-lg-start">Lorem ipsum dolor sit amet, consectetur adipis. <br />lacus laoreet tristique. Lorem ipsum dolor sit amet. <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, magnam!
              </p>
              <h4 className="text-lg-start">name</h4>
              <p className="text-lg-start">CEO</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonial-card p-3 d-flex align-items-center rounded-4 justify-content-center gap-4">
            <img src={img3} alt="Profile" />
            <div>
              <p className="text-lg-start">Lorem ipsum dolor sit amet, consectetur adipis. <br />lacus laoreet tristique. Lorem ipsum dolor sit amet. <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, magnam!
              </p>
              <h4 className="text-lg-start">name</h4>
              <p className="text-lg-start">CEO</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}

export default Testimonial;
