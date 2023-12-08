import React from 'react'
import '../styles/ProjectCard.css'

function ProjectCard(props) {

  return (
    <a href={props.link}><div className='project__card'>
      <img src={props.image} alt="Project image" />
      <div className="card__text">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div></a>
  )
}

export default ProjectCard