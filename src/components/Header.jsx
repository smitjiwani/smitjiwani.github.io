import React from 'react'
import '../styles/Header.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useEffect } from 'react';
import { useState } from 'react';
import pdf from '../assets/smit.pdf'
import { HashLink as Link } from 'react-router-hash-link';
import { Code } from '@mui/icons-material';





function Header() {

    const [mobile, setMobile] = useState(false);
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        }
        );
    }, []);


    // change class when max width is 768px


    useEffect(() => {
        if (window.innerWidth <= 768) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    }, []);


    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    });

    const [nav, setNav] = useState(false);

    // on any action if nav is true then set it to false and vice versa

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 1 && nav === true) {
                setNav(false);
            }
        })

    }, [window.scrollY, window.innerWidth]);

    // chnage innerhtml of .triple dots everytime nav changes

    return (
        <div className={`Navbar ${show && "Navbar scrolling"}`}>

            {mobile &&
                <div className="nav__button">
                    <div className="triple__dots" onClick={() => setNav(!nav)} >|||</div>
                </div>
            }


            <nav className={`${mobile ? "mobile_nav" : "navbar"}`} >
                <ul className="left">
                    <Link to="/#hero" smooth>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to="/#projects" smooth>
                        <li>
                            Projects
                        </li>
                    </Link>
                    <Link to="/#skills" smooth>
                        <li>
                            Skills
                        </li>
                    </Link>
                </ul>
                <ul className="right">
                    <a href="https://www.linkedin.com/in/smit-jiwani-1aa62816b/" target='_blank'><li><LinkedInIcon className='icon' /></li></a>
                    <a href="https://github.com/smitjiwani" target='_blank'><li><GitHubIcon className='icon' /></li></a>
                    <a href="https://codeforces.com/profile/smitttyy" target='_blank'><li><Code className='icon' /></li></a>
                    <a href="mailto:smitjiwani44@gmail.com" target='_blank'><button>Contact Now!</button></a>
                </ul>
            </nav>

            {mobile &&
                <div className="sidebar">
                    <div className={`${nav ? "side__nav" : "side__nav__inactive"}`}>
                        <div className='side__main'>
                            <Link to="/#hero" smooth className='sm__links'>
                                Home
                            </Link>
                            <Link to="/#projects" smooth className='sm__links'>
                                Projects
                            </Link>
                            <Link to="/#skills" smooth className='sm__links'>
                                Skills
                            </Link>
                        </div>

                        <ul className='side__social'>
                            <a href="https://www.linkedin.com/in/smit-jiwani-1aa62816b/" target='_blank'><li><LinkedInIcon className='icon' /></li></a>
                            <a href="https://github.com/smitjiwani" target='_blank'><li><GitHubIcon className='icon' /></li></a>
                            <a href="https://codeforces.com/profile/smitttyy" target='_blank'><li><Code className='icon' /></li></a>
                        </ul>

                        <ul className="side__contact">
                            <a href={pdf} target='_blank'><button>Resume</button></a>
                            <a href="mailto:smitjiwani44@gmail.com" target='_blank'><button>Contact</button></a>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header