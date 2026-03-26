import React, { useState } from 'react';
import { projects } from '../constants/index.js';
import { Link } from "react-router-dom";
 
const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);
 
  const handleTouchToggle = (e, index) => {
    e.preventDefault();
    setActiveIndex(prev => prev === index ? null : index);
  };
 
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
        P.S. Since most of these are college projects, the repositories are private to protect academic integrity. Demo videos are available, and repository access can be provided if requested.
      </p>
 
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;
 
          return (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onTouchStart={(e) => handleTouchToggle(e, index)}
            >
              <img
                src={project.cover}
                alt={project.name}
                className="w-full h-100 object-cover"
              />
 
              {/* Overlay gradient */}
              <div
                className={`absolute inset-0 transition-all duration-300
                  group-hover:bg-linear-to-b group-hover:from-pink-500/90 group-hover:via-pink-400/60 group-hover:to-black/80
                  ${isActive ? 'bg-linear-to-b from-pink-500/90 via-pink-400/60 to-black/80' : ''}
                `}
              />
 
              {/* Info panel */}
              <div
                className={`absolute left-0 w-full p-4 text-white transition-all duration-300
                  group-hover:bottom-0 group-hover:bg-transparent
                  ${isActive ? 'bottom-0 bg-transparent' : '-bottom-14.5 bg-black/40'}
                `}
              >
                <h3 className={`text-2xl font-semibold group-hover:line-clamp-2 ${isActive ? 'line-clamp-2' : 'line-clamp-1'}`}>
                  {project.title}
                </h3>
                <h4 className={`font-bold group-hover:line-clamp-3 ${isActive ? 'line-clamp-3' : 'line-clamp-1'}`}>
                  {project.skills}
                </h4>
                <p className={`text-sm mt-1 group-hover:line-clamp-7 ${isActive ? 'line-clamp-7' : 'line-clamp-2'}`}>
                  {project.description}
                </p>
 
                <button
                  className={`font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-pink-500 hover:bg-pink-500 hover:text-black transition mt-2
                    group-hover:block
                    ${isActive ? 'block' : 'hidden'}
                  `}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.url);
                  }}
                  onTouchStart={(e) => e.stopPropagation()}
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
 
      <div className="cta">
        <p>
          <b>Thank you for your interest in getting in touch!</b>
          <p className="mt-5 flex flex-col gap-3 text-slate-500">
            I value open communication and welcome any inquiries, feedback, or collaboration opportunities. Please don't hesitate to get in touch with me by filling out the contact form.
          </p>
        </p>
        <Link to='/contact' className='btn'>
          Contact
        </Link>
      </div>
    </section>
  );
};
 
export default Projects;