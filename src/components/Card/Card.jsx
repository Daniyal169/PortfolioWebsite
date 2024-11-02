import React from 'react'
import "./Card.css"

function Card({ image, heading, detail }) {
    return (
        <div className="card" data-aos="zoom-in" data-aos-delay="500">
            <img src={image} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
        </div>
    )
}

export default Card