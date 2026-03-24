import { skills } from '../constants/index.js';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Hello I'm <span className="blue-gradient_text font-semibold drop-shadow">Gurleen</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Graduating in Software Development this June from NBCC. I love bringing ideas to life, driven by curiosity and continuous learning.</p>
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

export default About