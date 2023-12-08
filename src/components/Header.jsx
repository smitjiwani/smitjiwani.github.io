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
    // detach header on scroll and change opacity
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        }
        );
    }, []);

    return (
        <div className={`Navbar ${show && "Navbar scrolling"}`}>
            {/* create a header file with home, about, projects, skills,  blogs */}
            <nav className='navbar' >
                <ul className='left'>
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
                <ul className='right'>
                    <a href="https://www.linkedin.com/in/smit-jiwani-1aa62816b/" target='_blank'><li><LinkedInIcon className='icon' /></li></a>
                    <a href="https://github.com/smitjiwani" target='_blank'><li><GitHubIcon className='icon' /></li></a>
                    <a href="https://codeforces.com/profile/smitttyy" target='_blank'><li><Code className='icon' /></li></a>
                    <a href="mailto:smitjiwani44@gmail.com" target='_blank'><button>Contact Now!</button></a>
                </ul>
            </nav>

        </div>
    )
}

export default Header