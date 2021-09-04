import './App.css';
import LazyHero from 'react-lazy-hero';
import { FaLinkedin, FaGithub, FaGitlab, FaGoodreads } from 'react-icons/fa';

function App() {
  return (
    <div>
      <header>
      <LazyHero color="#000" isCentered={true} minHeight="100vh" parallaxOffset="100" opacity="0.7" imageSrc="https://picsum.photos/id/1050/1920/1080">
        <div class="grid grid-cols-6 gap-2">
          <div class="col-start-2 col-span-4">
              <h1>Soy Juan Hernández.</h1>
              <hr className="bg-transparent"></hr>
              <h2>Soy <span className="text-white">matemático </span>
              y <span className="text-white">desarrollador full stack </span>
              . Además soy una persona muy curiosa, interesado en diversos temas como la economía o la filosofía. 
              </h2>
              <hr className="mx-auto"></hr>              
              <h2 className="flex flex-row flex-1 ">
                <FaLinkedin className="text-white ml-auto mr-2"/>
                <FaGithub className="text-white mr-2"/>
                <FaGitlab className="text-white mr-2"/>
                <FaGoodreads className="text-white mr-auto mr-2"/>
              </h2>
          </div>
        </div>
        </LazyHero>
      </header>
    </div>
  );
}

export default App;
