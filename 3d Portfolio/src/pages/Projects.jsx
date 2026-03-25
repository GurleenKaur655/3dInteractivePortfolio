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
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={project.cover}
              alt={project.name}
              className="w-full h-100 object-cover"
            />
           <div className="absolute inset-0 group-hover:bg-linear-to-b group-hover:from-pink-500 group-hover:via-pink-400/70 group-hover:to-black/80 transition-all duration-300" />

            <div className="absolute -bottom-14.5 left-0 w-full p-4 text-white transition-all duration-300 group-hover:bottom-0  bg-black/40 group-hover:bg-transparent">
              <h3 className="text-2xl font-semibold line-clamp-1 group-hover:line-clamp-2 ">{project.title}</h3>
              <h4 className="font-bold line-clamp-1 group-hover:line-clamp-3">{project.skills}</h4>
              <p className="text-sm mt-1 line-clamp-2 group-hover:line-clamp-7">{project.description}</p>

              <button
                className="font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-pink-500 hover:bg-pink-500 hover:text-black transition"
                onClick={() => window.open(project.url)}
              >
                View
              </button>
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