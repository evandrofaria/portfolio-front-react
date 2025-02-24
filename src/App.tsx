import ThemeToggle from './components/ThemeToogle.tsx';
import Hero from './components/Hero.tsx';


function App() {
  return (
    <div className="main-content flex flex-col justify-center m-6 desktop:m-8">
      <ThemeToggle/>
      <Hero/>
    </div>
  );
}

export default App;
