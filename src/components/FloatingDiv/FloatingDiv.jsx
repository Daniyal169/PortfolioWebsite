import React from 'react'
import "./FloatingDiv.css"
import useTheme from '../../context/Context'
function FloatingDiv({ image, text1, text2 }) {
    const { themeMode } = useTheme();
    return (
        <div className="floatingDiv">
            <img src={image} alt="" />
            <span style={{
                color: themeMode === "dark" ? "black" : "",
            }}>
                {text1}
                <br />
                {text2}
            </span>
        </div>
    )
}

export default FloatingDiv