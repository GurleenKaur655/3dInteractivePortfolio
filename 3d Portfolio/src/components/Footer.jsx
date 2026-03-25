import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-pink-600 shadow' />

      <div className='footer-container w-full'>
        <div className='flex justify-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-10 h-10 object-contain m-1'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;