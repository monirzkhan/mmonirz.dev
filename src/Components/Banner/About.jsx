
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
                className="relative h-150 w-full overflow-hidden bg-cover bg-center"
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
                <div>
                    <div className="px-2 absolute inset-0 flex flex-col items-center space-x-4 justify-center  text-left">
                        <div className="hero  min-h-screen">

                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img
                                    src="https://i.ibb.co.com/r2Pqx599/Monir-Photo.png"
                                    className="max-w-sm rounded-lg shadow-2xl"
                                />
                                <div className=''>

                                    <h1 className="text-3xl lg:text-6xl font-bold text-white px-1">Hi! I'm Md. Moniruzzaman</h1>
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
                                        className="margin text-2xl mt-4 font-google text-white"
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
            </div>

        </div>
    );
};

export default About;