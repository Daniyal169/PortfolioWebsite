import React from 'react'
import "./Skills.css"
import typescript from "../../img/TS.png"
import js from "../../img/js.png"
import css from "../../img/css.png"
import react from "../../img/react.png"
import redux from "../../img/redux.png"
import router from "../../img/router.png"
import boot from "../../img/boot.png"
import tailwind from "../../img/tailwind.png"
import wordpress from "../../img/wordpress.png"
import shopify from "../../img/shopify.png"
import cplus from "../../img/c++.png"
import mui from "../../img/mui.png"
import SkillBox from './SkillBox'
import useTheme from '../../context/Context'

function Skills() {
    const { themeMode } = useTheme()
    return (
        <div className="skills">
            <span style={{ color: themeMode === "dark" ? "#00FFFF" : "" }} data-aos="slide-right">Skills</span>

            <div className="skillSection" >
                <SkillBox img={css} />
                <SkillBox img={js} />
                <SkillBox img={react} />
                <SkillBox img={typescript} />
                <SkillBox img={redux} />
                <SkillBox img={router} />
                <SkillBox img={tailwind} />
                <SkillBox img={mui} />
                <SkillBox img={boot} />
                <SkillBox img={wordpress} />
                <SkillBox img={shopify} />
                <SkillBox img={cplus} />
            </div>
        </div>
    )
}

export default Skills