import React from 'react'
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'
import img from '../assets/smit.jpg'
import { useState } from 'react';
import { motion, useScroll } from "framer-motion"

function Projects() {

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
            image='https://github-production-user-asset-6210df.s3.amazonaws.com/78549024/268261074-67bbaff7-4344-4319-9a6e-491d0ae98653.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231208%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231208T114304Z&X-Amz-Expires=300&X-Amz-Signature=e4e7204ca1e07901c48c2b67b2ee67bf473c61bad1c665358b65cbdd45537753&X-Amz-SignedHeaders=host&actor_id=78549024&key_id=0&repo_id=692005346'
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
            image='https://private-user-images.githubusercontent.com/78549024/289059677-bb3d3b0c-3bdd-4de1-b2b9-b92938dad069.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIwMzY4OTcsIm5iZiI6MTcwMjAzNjU5NywicGF0aCI6Ii83ODU0OTAyNC8yODkwNTk2NzctYmIzZDNiMGMtM2JkZC00ZGUxLWIyYjktYjkyOTM4ZGFkMDY5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA4VDExNTYzN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU4YmFmZjc5OWFjMTkyYzY3ZGU0MTY3ZmNiMTk3NWE1YWE5ZWVkMmQ4MGZhMGNiZWI3ZjRmMGJlODE5MDY3MWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.E8zoKDIGjCBCfzphKaZ1mJQRfkAB95i-nkoQqqxECG8'
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



    return (


        <div className='Projects'>
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


                    <button onClick={() => handleCardSwitch('right')} className='btn__right'>&gt;</button>
                </div>
            </motion.div>
        </div >

    )
}

export default Projects