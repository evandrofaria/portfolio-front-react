import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

export default function Hero() {
  return (
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
