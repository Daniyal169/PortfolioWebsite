import React from 'react'
import "./Toggle.css"
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import useTheme from '../../context/Context';

function Toggle() {

    const { themeMode, darkTheme, lightTheme } = useTheme();

    const onChangeTheme = () => {
        if (themeMode === "light") {
            darkTheme();
        }
        else {
            lightTheme();
        }
    }

    return (
        <div className="toggle" onClick={onChangeTheme}>
            <Moon />
            <Sun />

            <div className="t-button" style={themeMode === "light" ? { left: "2px" } : { right: "2px" }} ></div>
        </div>
    )
}

export default Toggle