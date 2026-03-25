import React from 'react';
import { projects } from '../constants/index.js';
import { Link } from "react-router-dom";

const Projects = () => {

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='pink-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        These projects demonstrate the knowledge I have gained throughout my course as well as through my own learning. I am always open to feedback and collaborations!
        <br className="sm:block hidden" />
        P.S. Since most of these are school projects, the repositories are private to protect academic integrity. Demo videos are available, and repository access can be provided if requested.
      </p>
      <div className="mt-16 flex flex-wrap gap-12">
        {projects.map((project) => (
          <div >
            <div />
            <div>
              <img src={project.cover}
                alt={project.name}
                className="w-1/2 h-1/2 object-contain" />
              <p>{project.title}</p>
              <p>{project.skills}</p>
              <p>{project.description}</p>
               <button className="btn" onClick={() => window.open(project.url)}>View</button>
            </div>
          </div>
        ))}
      </div>
       <div className="cta">
        <p><bold>
          Thank you for your interest in getting in touch!
        </bold>
          <p className="mt-5 flex flex-col gap-3 text-slate-500">I value open communication and welcome any inquiries, feedback, or collaboration opportunities. Please don't hesitate to get in touch with me by filling out the contact form.
          </p>
        </p>
        <Link to='/contact' className='btn'>
          Contact
        </Link>
      </div>
    </section>
  )
}

export default Projects;