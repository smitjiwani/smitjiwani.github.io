import React from 'react'
import "../styles/Blogs.css"
import BlogCard from './BlogCard'
import img from "../assets/chess.png"

function Blogs() {
  return (
    <div>
      <h1 className='blogs'>
        <BlogCard
          image='https://miro.medium.com/v2/resize:fit:640/format:webp/1*tCvzWykAasm4gcr498bqUw.png'
          title="Why feeling dumb is the most important part of being a Developer/Programmer (feat. C4GT)"
          description="In this blog post, I share my experience of starting open source contributions, working on DPGs, and making good connections. I discuss the importance of feeling dumb and how it contributes to personal and professional growth as a developer/programmer. Check it out!"
          link="https://medium.com/@smitjiwani44/why-feeling-dumb-is-the-most-important-part-of-being-a-developer-programmer-feat-c4gt-8d9b146bca29"
        />
      </h1>
    </div>
  )
}

export default Blogs