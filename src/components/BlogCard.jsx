import React from 'react'
import "../styles/BlogCard.css"

function BlogCard(props) {
    // Access props here

    return (
        <div className='blog__card'>
            <img src={props.image} alt="blog__card__img" className='blog__card__img' />
            <div className="blog__card__content">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <a href={props.link} target="_blank" rel="noreferrer">
                    <button>Read More</button>
                </a>
            </div>
        </div>
    )
}

export default BlogCard