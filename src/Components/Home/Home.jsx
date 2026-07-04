
import About from '../Banner/About';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';


const Home = () => {
    return (
        <div >

        
            <About/>
            {/* <App/> */}
            <AboutMe/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
            
            
        </div>
    );
};

export default Home;