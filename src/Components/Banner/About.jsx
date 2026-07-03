
import DotField from './DotField';
import './About.css'
import TextType from './TextType';
import { Link } from 'react-router';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";




const About = () => {
    return (
        <div>
            <div
                className="relative min-h-screen sm:h-[700px] md:h-[750px] lg:h-[800px] w-full overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage:
                        'linear-gradient(135deg, rgba(6, 11, 34, 0.98), rgba(15, 23, 42, 0.95)), radial-gradient(circle at top left, rgba(99, 102, 241, 0.14), transparent 28%), radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.1), transparent 24%)',
                }}
            >
                <DotField
                    dotRadius={1.5}
                    dotSpacing={14}
                    bulgeStrength={67}
                    glowRadius={160}
                    sparkle={true}
                    waveAmplitude={0}
                />
                <div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 py-4 sm:py-2 md:py-4 text-left gap-2 sm:gap-3 md:gap-4">
            <div className='hero-content flex-col lg:flex-row-reverse w-full max-w-6xl mx-auto'>
              <img
                src="https://i.ibb.co.com/r2Pqx599/Monir-Photo.png"
                className="w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:max-w-sm rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 object-cover"
                alt="Monir"
              />
              <div className="w-full px-2 sm:px-4 md:px-6 text-left">
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-google transition-all duration-300 hover:text-white hover:drop-shadow-xl drop-shadow-lg leading-tight">
                  Hi, I'm Md. Moniruzzaman
                </h1>
                <div className="transition-all duration-300 hover:text-white mt-2 sm:mt-3">
                  <TextType
                    text={[
                      'Full Stack Web Developer',
                      'Enterpreneur',
                      'Building polished portfolio experiences'
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl mt-1 sm:mt-2 md:mt-4 font-google text-white drop-shadow-lg"
                    cursorClassName="text-white"
                  />
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg mt-3 sm:mt-4 md:mt-5 px-1 text-white font-google max-w-2xl mx-auto leading-relaxed">
                    Welcome to my portfolio website! I'm a passionate developer with a love for creating innovative solutions. Explore my projects and skills to see how I can contribute to your next big idea.
                  </p>
                  <div className='flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-6'>
                    <Link to={"https://github.com/monirzkhan"}>
                      <button className="btn btn-sm sm:btn-md md:btn-lg btn-accent text-white hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1 sm:gap-2">
                        <CiSaveDown2 size={16} className="sm:hidden" />
                        <CiSaveDown2 size={20} className="hidden sm:block md:hidden" />
                        <CiSaveDown2 size={24} className="hidden md:block" />
                        <span className="text-xs sm:text-sm md:text-base">Resume</span>
                      </button>
                    </Link>
                    <Link to={"https://linkedin.com/in/monirzkhan-dev"}>
                      <button className="btn btn-sm sm:btn-md md:btn-lg btn-primary text-white hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1 sm:gap-2">
                        <FaLinkedin size={16} className="sm:hidden" />
                        <FaLinkedin size={20} className="hidden sm:block md:hidden" />
                        <FaLinkedin size={24} className="hidden md:block" />
                        <span className="text-xs sm:text-sm md:text-base">LinkedIn</span>
                      </button>
                    </Link>
                    <Link to={"https://github.com/monirzkhan"}>
                      <button className="btn btn-sm sm:btn-md md:btn-lg btn-primary text-white hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1 sm:gap-2">
                        <FaGithub size={16} className="sm:hidden" />
                        <FaGithub size={20} className="hidden sm:block md:hidden" />
                        <FaGithub size={24} className="hidden md:block" />
                        <span className="text-xs sm:text-sm md:text-base">GitHub</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

                </div>
            </div>

        </div>
        
        
    );
};

export default About;