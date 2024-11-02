import React from 'react'
import "./Testimonial.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import useTheme from '../../context/Context';


function Testimonial() {

    const clients = [
        {
            review: "Daniyal transformed our Settle Homes website with a sleek design and seamless functionality. Highly professional and detail-oriented. Exceptional work!",
            name: "Serena Huang"
        },
        {
            review: "Daniyal created a user-friendly and professional hospital website that improved our patient experience significantly. His attention to detail is impressive!",
            name: "Dr. Abid Mushtaq"
        },
        {
            review: "Daniyal delivered an incredible portfolio website for us. User-friendly, responsive, and visually stunning. Great job!",
            name: "Fahad Nawaz"
        },
        {
            review: "Working with Daniyal on the e-commerce dashboard was a pleasure. His creativity and technical skills brought our project to life. Fantastic developer!",
            name: "Prof Ali"
        },
        {
            review: "Daniyal's work on our tech project was exceptional. His technical expertise and innovative approach enhanced our product's functionality",
            name: "Danish"
        }

    ];
    const { themeMode } = useTheme()

    return (
        <div className="testimonial">
            <div className="t-heading">
                <span style={{ color: themeMode === "dark" ? "#00FFFF" : "" }} data-aos="slide-right">Clients Reviews </span>
                <div className="blur1 t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur2 t-blur2" style={{ background: "skyblue" }}></div>

            </div>

            <Swiper
                slidesPerView={1}
                grabCursor={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index} className='swiperSlide'>
                            <div className="test-box" >
                                <span style={{ color: themeMode === "dark" ? "white" : "" }}>{client.review}</span>
                                <span style={{ color: themeMode === "dark" ? "white" : "" }}>~{client.name}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonial