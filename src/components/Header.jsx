import React from 'react'
import '../styles/Header.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useEffect } from 'react';
import { useState } from 'react';





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
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Skills</li>
                </ul>

                <ul className='right'>
                    <a href="https://www.linkedin.com/in/smit-jiwani-1aa62816b/"><li><LinkedInIcon className='icon' /></li></a>
                    <a href="https://github.com/smitjiwani"><li><GitHubIcon className='icon' /></li></a>
                    <a href="mailto:smitjiwani44@gmail.com"><li><EmailIcon className='icon' /></li></a>
                    <button>Resume</button>
                </ul>
            </nav>

        </div>
    )
}

export default Header