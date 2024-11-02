import React from 'react'
import "./Navbar.css"
import Toggle from '../Toggle/Toggle'
import { Link } from "react-scroll"
import Upwork from "../../img/Upwork.png"

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-left">
                <div className="nav-name">DANIYAL</div>
                <Toggle />
            </div>
            <div className="nav-right">
                <div className="nav-links">
                    <ul>
                        <li>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true} className='navlink'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true} className='navlink'>
                                Serivces
                            </Link>
                        </li>

                        <li>
                            <Link to="portfolio" spy={true} smooth={true} className='navlink'>
                                Protfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="testimonial" spy={true} smooth={true} className='navlink'>
                                Testimonial
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to='contact' spy={true} smooth={true}>
                    <button className="navBtn">Contact</button>
                </Link>
            </div>
            <a href={"https://www.upwork.com/freelancers/~01341fed9cb414c4ac?mp_source=share"} target='__blank'>
                <img src={Upwork} alt="" className='Upwork' />
            </a>
        </div>
    )
}

export default Navbar