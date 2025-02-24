import ThemeToggle from './components/ThemeToogle.tsx';
import Hero from './components/Hero.tsx';
import { socialUrls } from './shared/constants.ts';
import { IoMdDownload } from 'react-icons/io';
import { IoCodeDownloadSharp } from 'react-icons/io5';


function App() {
  return (
    <>
    <div className="main-content flex flex-col justify-center m-6 desktop:m-8">
      <ThemeToggle/>
      <Hero title="Evandro Faria" subtitle="Desenvolvedor Full Stack" emailUrl={ socialUrls.emailUrl }
            githubUrl={ socialUrls.githubUrl } linkedinUrl={ socialUrls.linkedinUrl }/>

      <div className="flex justify-between mt-9">
        <button className="btn btn-accent">Download CV<IoMdDownload /></button>
        <button className="btn btn-neutral">Código Fonte<IoCodeDownloadSharp /></button>
      </div>
    </div>
    </>
  );
}

export default App;
