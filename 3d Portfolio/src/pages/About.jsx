import { skills } from '../constants/index.js';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Hello I'm <span className="pink-gradient_text font-semibold drop-shadow">Gurleen</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500 text-lg sm:text-xl">
        <p>Software Development graduate turning curiosity into code, from full-stack apps to building an LLM from scratch.</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center">
                <img src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cta">
        <div>
          <p className="text-xl sm:text-2xl font-bold">
            Thank you for your interest in getting in touch!
          </p>
          <p className="mt-5 text-slate-500 text-lg sm:text-xl">
            I value open communication and welcome any inquiries, feedback, or collaboration opportunities. Please don't hesitate to get in touch with me by filling out the contact form.
          </p>
        </div>
        <Link to='/contact' className='btn sm:text-lg! sm:px-8! sm:py-3.5!'>
          Contact
        </Link>
      </div>
    </section>
  )
}

export default About