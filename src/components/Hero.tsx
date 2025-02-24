import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

export default function Hero() {
  return (
    // <div className="container-hero justify-center flex">
    //   <div className="avatar">
    //     <div className="w-52">
    //       <img src="src/assets/img/avatar.png" alt="Evandro Faria" />
    //     </div>
    //   </div>
    //
    //   <div className="content-hero ml-10 text-start justify-center flex flex-col">
    //
    //     <h1 className="md:text-4xl text-base font-medium text-neutral">Evandro Faria</h1>
    //     <p className="text-lg font-sans mt-1 text-base-200">Desenvolvedor Front-end</p>
    //
    //     <div className="flex gap-4 mt-2 items-center">
    //       <a href="https://github.com" target="_blank" >
    //         <ReactSVG src="icons/github.svg"/>
    //       </a>
    //
    //       <a href="https://github.com" target="_blank">
    //         <ReactSVG src="icons/linkedin.svg"/>
    //       </a>
    //
    //       <a href="https://github.com" target="_blank">
    //         <ReactSVG src="icons/mail.svg"/>
    //       </a>
    //
    //     </div>
    //   </div>
    // </div>
    <div className="container-hero justify-center items-center flex flex-col mt-6 desktop:flex-row desktop:mt-10">
      <div className="avatar">
        <div className="w-32 desktop:w-[215px]">
          <img src="src/assets/img/avatar.png" alt="Evandro Faria"/>
        </div>
      </div>

      <div className="content-hero">
        <h1 className="font-medium text-primary text-center desktop:text-start">Evandro Faria</h1>
        <h3 className="font-sans text-secondary text-center desktop:text-start">Desenvolvedor Full Stack</h3>
        <div className="social-container flex gap-4 justify-center">
          <IoLogoGithub color="var(--alternative)"/>
          <IoLogoLinkedin color="var(--alternative)"/>
          <IoIosMail color="var(--alternative)"/>
        </div>
      </div>
    </div>
  );
}
