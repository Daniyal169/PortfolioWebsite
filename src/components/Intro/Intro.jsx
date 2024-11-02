import React, { useEffect, useRef } from 'react';
import "./Intro.css";
import { init } from 'ityped';
import boy from "../../img/boy.webp";
import useTheme from '../../context/Context';
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Resume from './Resume.pdf';

function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 900,
            strings: ['Frontend Developer', 'UI/UX Designer']
        });
    }, []);

    const { themeMode } = useTheme();

    return (
        <div className="intro" >
            <div className="intro-left">
                <div className="intro-name" data-aos="fade-in" data-aos-delay="200">
                    <span style={{ color: themeMode === "dark" ? "white" : "" }}>
                        Hy! I AM
                    </span>
                    <span style={{ color: themeMode === "dark" ? "#00FFFF" : "" }}>Daniyal Sohail</span>
                    <span style={{ color: themeMode === "dark" ? "white" : "" }}>Passionate
                        <span ref={textRef} style={{ color: themeMode === "dark" ? "#00FFFF" : "" }}></span>
                    </span>
                </div>
                <a href={Resume} download>
                    <button className="i-btn btn">Download CV</button>
                </a>

                <div className="intro-icon"  >
                    <a href="https://www.instagram.com/daniyal__169/" target="_blank" rel="noopener noreferrer" >
                        <Instagram color="#FF4500" size={"2.5rem"} />
                    </a>
                    <a href="https://www.linkedin.com/in/daniyalsohail169/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn color="#0077B5" size={"2.5rem"} />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <Github color="#181717" size={"2.5rem"} />
                    </a>
                </div>
            </div>

            <div className="intro-right">
                <img src={boy} alt="Boy" data-aos="zoom-in" data-aos-delay="300" />

                <div className="blur1"></div>
                <div className="blur2"></div>
            </div>
        </div>
    );
}

export default Intro;
