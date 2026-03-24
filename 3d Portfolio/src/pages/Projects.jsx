import React from 'react'

const Projects = () => {
  return (
      <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
       These projects demonstrate the knowledge I have gained throughout my course as well as through my own learning. I am always open to feedback and collaborations!
       <br className="sm:block hidden"/>
       P.S. Since most of these are school projects, the repositories are private to protect academic integrity. Demo videos are available, and repository access can be provided if requested.
      </p>
      </section>
  )
}

export default Projects;