import React, { useEffect } from 'react'
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'
import { useState } from 'react';
import { motion, useScroll } from "framer-motion"
import chess from '../assets/chess.png'
import mern from '../assets/mern.png'

function Projects() {

    const [mobile, setMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1);


    const cards = [
        <ProjectCard
            title='LinkedIn Clone'
            description='This a LinkedIn Clone made using ReactJS, Redux, Firebase, Material UI, and more. It is a fully functional LinkedIn Clone with authentication, posting, and more.'
            image='https://user-images.githubusercontent.com/78549024/210163932-9ab32272-083b-4da8-bddf-ecb624df52fd.png'
            link='https://github.com/smitjiwani/linkedIn_clone'
        />,
        <ProjectCard
            title='Mern Todo'
            description='This is a MERN Todo App made using ReactJS, Redux, NodeJS, ExpressJS, MongoDB, and more. It is a fully functional Todo App with authentication, posting, and more.'
            image={mern}
            link='https://github.com/smitjiwani/mern_todo'
        />,
        <ProjectCard
            title='Network Programming App'
            // has DDOS mailing server portscanner and socket chatroom using python
            description='This project is a Python application that includes features such as DDOS attack simulation, mailing server functionality, port scanning, and a socket-based chatroom.'
            image='https://ambrapaliaidata.blob.core.windows.net/ai-storage/articles/image_fslj9V1.png'
            link='https://github.com/smitjiwani/network-programming-app'
        />, <ProjectCard
            title='TPAT'
            description='Teachers performance analysis tool is a web application made using ReactJS, Redux, NodeJS, ExpressJS, MongoDB, and more.'
            link='https://github.com/smitjiwani/TPAT'
            image='https://blog.postman.com/wp-content/uploads/2021/03/APIs-in-Postman-e1616786230943.png'
        />,
        <ProjectCard
            title='Chess-js'
            description='This is a chess game made using ReactJS, Redux, and more. It is a fully functional chess game with all the rules of chess implemented.'
            link='https://github.com/smitjiwani/js-chess'
            image={chess}
        />
    ];

    const handleCardSwitch = (direction) => {
        setTimeout(() => {
            if (direction === 'left') {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
            } else if (direction === 'right') {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
            }
        }, 100);
    };

    // make cards move left or right on click

    useEffect(() => {
        if (window.innerWidth <= 1000) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    }, []);

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 1000) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    });




    return (
        <div className='Projects' id='projects'>
            <h1>Projects</h1>
            <motion.div
                initial={{ opacity: 0, marginBottom: -300 }}
                whileInView={{ opacity: 1, marginBottom: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="container">

                    <button onClick={() => handleCardSwitch('left')} className='btn__left'>&lt;</button>
                    <div className="cards">
                        <div>{cards[(currentIndex - 1 + cards.length) % cards.length]}</div>
                        <div className='mid_card'>{cards[currentIndex]}</div>
                        <div>{cards[(currentIndex + 1) % cards.length]}</div>

                    </div>

                    {mobile && <div className="mobile__card">

                        <div className='mid_card'>{cards[currentIndex]}</div>

                    </div>}


                    <button onClick={() => handleCardSwitch('right')} className='btn__right'>&gt;</button>
                </div>
            </motion.div>
        </div >

    )
}

export default Projects