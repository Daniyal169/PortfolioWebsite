import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import "./Experience.css";
import useTheme from '../../context/Context';

function Experience() {
    const { themeMode } = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    const counter = (num) => {
        const [count, setCount] = useState(0);
        useEffect(() => {
            if (isVisible) {
                let i = 0;
                const interval = setInterval(() => {
                    if (i >= num) {
                        clearInterval(interval);
                    } else {
                        i += Math.ceil(num / 100);
                        setCount(i);
                    }
                }, 50);
            }
        }, [isVisible, num]);

        return count;
    };

    return (
        <div className='experience' ref={ref} data-aos="fade-in" data-aos-delay="100">

            <div className="exp-box">
                <div className="circle" style={{
                    color: themeMode === "dark" ? "black" : "",
                }}>{counter(2)}+</div>
                <span style={{
                    color: themeMode === "dark" ? "black" : "",
                }}>years</span>
                <span style={{
                    color: themeMode === "dark" ? "black" : "",
                }}>Experience</span>
            </div>

            <div className="exp-box">
                <div className="circle" style={{
                    color: themeMode === "dark" ? "black" : "",
                }}>{counter(25)}+</div>
                <span style={{
                    color: themeMode === "dark" ? "black" : "",
                }}>completed</span>
                <span style={{
                    color: themeMode === "dark" ? "black" : "",
                }}>Projects</span>
            </div>

            <div className="exp-box">
                <div className="circle" style={{
                    color: themeMode === "dark" ? "black" : "",
                }}>{counter(500)}+</div>
                <span style={{
                    color: themeMode === "dark" ? "black" : "",
                }}>hour</span>
                <span style={{
                    color: themeMode === "dark" ? "black" : "",
                }}>worked</span>
            </div>

            <div className="exp-box">
                <div className="circle" style={{
                    color: themeMode === "dark" ? "black" : "",
                }}>{counter(400)}+</div>
                <span style={{
                    color: themeMode === "dark" ? "black" : "",
                }}>cups of</span>
                <span style={{
                    color: themeMode === "dark" ? "black" : "",
                }}>Tea</span>
            </div>

        </div>
    );
}

export default Experience;
