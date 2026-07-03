import React from 'react';
import DotField from './DotField';
import './About.css'
import TextType from './TextType';

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
                    <div className="absolute inset-0 flex flex-col items-center justify-center  text-left">
                        <div className="hero  min-h-screen">

                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img
                                    src="https://i.ibb.co.com/r2Pqx599/Monir-Photo.png"
                                    className="max-w-sm rounded-lg shadow-2xl"
                                />
                                <div className=''>

                                    <h1 className="text-6xl font-bold text-white">Hi! I'm Md. Moniruzzaman</h1>
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
                                    <p className="text-lg mt-4 text-white font-google max-w-2xl margin">
                                        Welcome to my portfolio website! I'm a passionate developer with a love for creating innovative solutions. Explore my projects and skills to see how I can contribute to your next big idea.
                                    </p>
                                    <div>
                                        <button className="btn btn-primary margin">Download Resume</button>
                                        <button className="btn btn-primary margin">Linkedin</button>
                                        <button className="btn btn-primary margin">Github</button>
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