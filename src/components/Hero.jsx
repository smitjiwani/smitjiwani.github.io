import React from 'react'
import '../styles/Hero.css'
import Typed from 'typed.js'
import smit from '../assets/smit.jpg'
import pdf from '../assets/smit.pdf'
import { Code, Email, GitHub, LinkedIn } from '@mui/icons-material';
import { motion, useScroll } from "framer-motion"

function Hero() {

    const el = React.useRef(null);

    React.useEffect(() => {
        var typed = new Typed(el.current, {
            strings: ["Smit Jiwani", "a Full Stack Alchemist", "a Software Architect", " a Data Scientist", "an AI Practitioner", "a Blockchain Enthusiast"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [])

    return (
        <div className='hero' id='hero'>
            <motion.div
                initial={{ opacity: 0, marginLeft: -200 }}
                whileInView={{ opacity: 1, marginLeft: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="hero__img">
                    <img src={smit} alt="" />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, marginRight: -200 }}
                whileInView={{ opacity: 1, marginRight: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="hero__text">
                    <h2 >Hi, I am <span ref={el} className='changed'></span> </h2>
                    <p>Embark on a journey through my digital realm! As a seasoned Full Stack Alchemist, I wield the powers of GraphQL and Docker, orchestrating a magical symphony of innovation and software architecture. Join me, and together, let's transform your tech aspirations into reality! </p>
                    <div className="hero__social">
                        <ul>
                            <li><Code className='icons' /></li>
                            <li><Email className='icons' /></li>
                            <li><GitHub className='icons' /></li>
                            <li><LinkedIn className='icons' /></li>
                        </ul>
                    </div>
                    <div className="hero__btn">
                        <a href={pdf}><button>Download CV</button></a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero