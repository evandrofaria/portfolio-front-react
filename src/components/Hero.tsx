import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from 'react-icons/io';
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  githubUrl: string;
  linkedinUrl: string;
  emailUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, githubUrl, linkedinUrl, emailUrl }) => {
  return (
    <div className="container-hero flex flex-col items-center mt-6 md:flex-row md:mt-10">
      <div className="avatar">
        <div className="w-32 md:w-[215px]">
          <img src="src/assets/img/avatar.png" alt="Evandro Faria"/>
        </div>
      </div>

      <div className="content-hero text-center md:text-start mt-4 md:mt-0 md:ml-6">
        <h1 className="font-medium text-primary text-[32px]">{ title }</h1>
        <h3 className="font-sans text-secondary text-[14px]">{ subtitle }</h3>

        <div className="social-container flex gap-4 justify-center md:justify-start mt-2">
          <a href={ githubUrl } target="_blank" rel="noopener noreferrer">
            <IoLogoGithub color="var(--secondary)" className="w-6 h-6 hover:opacity-80 transition-opacity"/>
          </a>
          <a href={ linkedinUrl } target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin color="var(--secondary)" className="w-6 h-6 hover:opacity-80 transition-opacity"/>
          </a>
          <a href={ `mailto:${ emailUrl }` }>
            <IoIosMail color="var(--secondary)" className="w-6 h-6 hover:opacity-80 transition-opacity"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
