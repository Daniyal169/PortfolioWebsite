import React from 'react'
import "./Services.css"
import design from "../../img/design.png";
import coding from "../../img/coding.png";
import coding2 from "../../img/coding2.png";
import design2 from "../../img/design2.png";
import Card from '../Card/Card';
import useTheme from '../../context/Context';

function Services() {
    const { themeMode } = useTheme();
    return (
        <div className="services">
            <div className="ser-left">

                <span style={{ color: themeMode === "dark" ? "#00FFFF" : "" }} data-aos="slide-right">Services</span>
                <span style={{ color: themeMode === "dark" ? "white" : "" }} data-aos="fade-in"> Discover our wide array of expertly crafted solutions designed to enhance
                    <br /> Your digital experience and help your business thrive online</span>
                <a href={"https://www.fiverr.com/s/wkzbQ2D"} target='__blank' data-aos="slide-up">
                    <button className="ser-btn btn">Lets Work</button>
                </a>
                <div className="blur1 ser-blur" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="ser-right">
                <div >
                    <Card

                        image={design2}
                        heading={"UI/UX"}
                        detail={"Crafting engaging interfaces for websites and apps using tools like Figma"}
                    />
                </div>
                <div >
                    <Card

                        image={coding}
                        heading={"Web Development"}
                        detail={"Expert in web technologies to build fully functional and responsive websites."}
                    />
                </div>
                <div >
                    <Card

                        image={design}
                        heading={"Product Design"}
                        detail={"Designing user-centered products with a focus on functionality and aesthetics."}
                    />
                </div>
                <div>
                    <Card

                        image={coding2}
                        heading={"Ecommerce Store"}
                        detail={" Designing and developing custom e-commerce stores with focus on seamless functionality and engaging design."}
                    />
                </div>
                <div
                    className="blur2 s-blur2"
                    style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div>
    )
}

export default Services