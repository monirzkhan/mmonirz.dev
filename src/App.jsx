

import './App.css'
import DotField from './Components/Banner/DotField'
import TextType from './Components/Banner/TextType'

function App() {
  return (
    <>
      <section>
        <div
          className="relative h-[600px] w-full overflow-hidden bg-cover bg-center"
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
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-4xl font-bold text-white font-google">Hi, I'm Monir</h1>
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
              className="text-2xl mt-4 font-google text-white"
              cursorClassName="text-white"
            />
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
