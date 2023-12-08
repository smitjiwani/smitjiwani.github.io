import React from 'react'
import "../styles/Paper.css"

function Paper(props) {
  return (
    <div>
      <h1 className='Paper'>
        <div className='researchPapers__card'>
          <img src={props.image} alt="researchPapers__card__img" className='researchPapers__card__img' />
          <div className="researchPapers__card__content">
            <h1>{props.title}</h1>
            <p>{props.abstract}</p>
            <a href={props.link} target="_blank" rel="noreferrer">
              <button>Read More</button>
            </a>
          </div>
        </div>
      </h1>
    </div>
  )
}

export default Paper