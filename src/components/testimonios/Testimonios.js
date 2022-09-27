import React from "react";
import "./Testimonios.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Ernest Achiever",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    avatar: AVTR2,
    name: "Ernest Achiever",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    avatar: AVTR3,
    name: "Ernest Achiever",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    avatar: AVTR4,
    name: "Ernest Achiever",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const Testimonios = () => {
  return (
    <section id="testimonios">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules 
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }} >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avtr one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
        {/*   <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="avtr one" />
                    </div>
                        <h5 className="client__name">Ernest Achiever</h5>
                        <small className='client_review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                </article>

                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR2} alt="avtr one" />
                    </div>
                        <h5 className="client__name">Ernest Achiever</h5>
                        <small className='client_review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR3} alt="avtr one" />
                    </div>
                        <h5 className="client__name">Ernest Achiever</h5>
                        <small className='client_review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                </article>
                  <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR4} alt="avtr one" />
                        <h5 className="client__name">Ernest Achiever</h5>
                    </div>
                        <small className='client_review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                </article> */}
      </Swiper>
    </section>
  );
};

export default Testimonios;
