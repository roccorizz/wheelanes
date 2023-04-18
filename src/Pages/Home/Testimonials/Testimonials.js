import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../../assets/avatar1.jpg";
import AVTR2 from "../../../assets/avatar2.jpg";
import AVTR3 from "../../../assets/avatar3.jpg";
import AVTR4 from "../../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const Testimonials = () => {
    const data = [
        {
            avatar: AVTR1,
            name: "Annie Manie",
            review:
                "Very good service indeed.They are the best"
        },
        {
            avatar: AVTR2,
            name: "Justin Cook",
            review:
                "One of the best platform I've ever seen in my life."
        },
        {
            avatar: AVTR3,
            name: "Taylor Swift",
            review:
                "They are doing great no doubt.Best of luck,guys."
        },
        {
            avatar: AVTR4,
            name: "Lady Gaga",
            review:
                "I am really blessed to have a platform like that.They made it."
        }
    ];
    return (
        <section id="testimonials">
            <h1 className="mt-10 mb-2 text-xl md:text-2xl lg:text-4xl text-cyan-500 font-bold md:text-left text-center ">WHAT CLIENTS SAY</h1><hr className="py-2" />

            <Swiper
                className=" testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}

            >
                {data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonials mt-8 mb-10">
                            <div className="client__avatar aspect-square">
                                <img src={avatar} alt="" />
                            </div>
                            <h2 className="text-center text-blue-200 text-2xl">{name}</h2>
                            <p className="client_review">{review}</p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>


        </section>
    );
};

export default Testimonials;