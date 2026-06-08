

import './App.css'
import Card from './Components/Banner/Card'

function App() {


  return (
    <>
      <section >
        <div className="h-96">
          <Card></Card>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl font-bold text-white font-google">Hi, I'm Monir</h1>
            <p className="text-lg mt-2 text-white font-google">Welcome to my portfolio website! I'm a passionate developer with a love for creating innovative solutions. Explore my projects and skills to see how I can contribute to your next big idea.</p>
          </div>
        </div>
        <div>
          
          
          <p className="text-lg mt-2 font-google">Welcome to my portfolio website! I'm a passionate developer with a love for creating innovative solutions. Explore my projects and skills to see how I can contribute to your next big idea.</p>
          <p className="text-lg mt-2 font-bricolage">Welcome to my portfolio website! I'm a passionate developer with a love for creating innovative solutions. Explore my projects and skills to see how I can contribute to your next big idea.</p>
         
        </div>
      
      </section>

      <div className="ticks"></div>

      

     
    </>
  )
}

export default App
