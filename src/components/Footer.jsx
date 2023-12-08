import React from 'react'
import '../styles/Footer.css'
import { LocationOn, Phone } from '@mui/icons-material'
import { Link, Outlet } from 'react-router-dom'


function Footer() {
    return (
        <div className='footer'>
            <div className='footer_up'>
                <div className="footer_left">
                    <h1>Get in Touch</h1>
                    <p><LocationOn /> Mumbai</p>
                    <p><Phone /> +91 8850382695</p>
                    <a href="mailto:smitjiwani44@gmail.com" target='_blank'>smitjiwanni44@gmail.com</a>
                </div>
                <div className="footer_right">
                    <h1>Other Links</h1>
                    <ul>
                        <Link to="blogs"><li>Blogs</li></Link>
                        <Link to="research-paper"><li>Research Papers</li></Link>
                        <Link to="privacy-policy"><li>Privacy Policy</li></Link>
                    </ul>
                </div>
            </div>
            <div className="footer_down">
                <p>© 2021 <a href="https://www.linkedin.com/in/smit-jiwani-1aa62816b/" target="_blank" rel="noopener noreferrer">Smit Jiwani</a>. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer