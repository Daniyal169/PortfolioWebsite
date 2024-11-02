import React from 'react'
import useTheme from '../../context/Context'

function SkillBox({ img }) {
    const themeMode = useTheme()
    return (
        <div className="skillBox" style={{ backgroundColor: themeMode === "dark" ? "white" : "" }} data-aos="fade-up" data-aos-delay="500">
            <img src={img} alt="" />

        </div>
    )
}

export default SkillBox