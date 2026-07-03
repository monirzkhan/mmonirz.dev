

import { Link } from 'react-router'
import './App.css'
import DotField from './Components/Banner/DotField'
import TextType from './Components/Banner/TextType'


import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";


function App() {
  return (
    <>
      <section>
        <div
          className="relative min-h-screen sm:h-[600px] w-full overflow-hidden bg-cover bg-center"
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
            sparkle={false}
            waveAmplitude={0}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center gap-3 sm:gap-4">
            <div className='hero-content flex-col lg:flex-row-reverse'>
              <img
                src="https://i.ibb.co.com/r2Pqx599/Monir-Photo.png"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-google transition-all duration-300 hover:text-white drop-shadow-lg">
                  Hi, I'm Md. Moniruzzaman
                </h1>
                <div className="transition-all duration-300 hover:text-white">
                  <TextType
                    text={[
                      'Full Stack Web Developer',
                      'React & Tailwind enthusiast',
                      'Building polished portfolio experiences'
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    className="text-sm xs:text-base sm:text-lg lg:text-2xl mt-2 sm:mt-4 font-google text-white drop-shadow-lg"
                    cursorClassName="text-white"
                  />
                      <p className="text-lg mt-4 px-1 text-white font-google max-w-2xl margin">
                                        Welcome to my portfolio website! I'm a passionate developer with a love for creating innovative solutions. Explore my projects and skills to see how I can contribute to your next big idea.
                                    </p>
                                    <div className='margin space-x-2'>

                                        <Link to={"https://github.com/monirzkhan"}><button className="btn btn-accent text-white"><CiSaveDown2 size={32} />
                                            Download Resume</button></Link>
                                        <Link to={"https://linkedin.com/in/monirzkhan-dev"}><button className="btn btn-primary "><FaLinkedin size={32} />
                                            Linkedin</button></Link>
                                        <Link to={"https://github.com/monirzkhan"} className="btn btn-primary "> <FaGithub size={32} />
                                            Github</Link>
                                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* <div className="mt-10 h-96">
          <Card />
        </div>

        <div className="mt-8 px-6">
          <p className="text-lg mt-2 font-google">
            Welcome to my portfolio website! I'm a passionate developer with a love for creating innovative solutions. Explore my projects and skills to see how I can contribute to your next big idea.
          </p>
          <p className="text-lg mt-2 font-bricolage">
            Welcome to my portfolio website! I'm a passionate developer with a love for creating innovative solutions. Explore my projects and skills to see how I can contribute to your next big idea.
          </p>
        </div> */}
      </section>

      <div className="ticks"></div>
    </>
  )
}

export default App
