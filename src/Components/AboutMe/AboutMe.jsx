import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { VscThinking } from "react-icons/vsc";




const AboutMe = () => {
    return (
        <div id="about" className="bg-[#0F172A]  px-8 flex flex-col md:flex-row-reverse justify-center gap-8 items-center py-8">
            <div className="space-y-4 md:w-1/2 ">
                <h1 className="text-3xl font-raleway text-accent">About <span className="text-4xl font-bricolage font-bold text-secondary">Me</span></h1>

                <h3 className="text-xl font-bricolage text-white italic ">Building Digital Products with Business Thinking</h3>

                <p className="sm:text-sm md:text-lg font-google text-secondary text-justify mb-4 ">Hi, I'm Mohammad Moniruzzaman — a Full Stack Developer, entrepreneur, and problem solver based in Bangladesh. <br /><br />

                    My journey didn't begin with programming. I spent 7+ years working in construction, government projects, international documentation, and business development. Those experiences taught me how real organizations operate, how decisions are made, and where technology can create meaningful impact. <br /><br />

                    Today, I build modern web applications with React, Node.js, Express, PostgreSQL, and MongoDB. I'm especially passionate about SaaS products, automation, and AI-powered solutions that solve real business challenges. <br /><br />

                    My goal isn't just to write clean code—it's to build products that improve people's lives and scale globally.</p>
            </div>
            <div>
                <div className="grid grid-cols-1  md:grid-cols-2 gap-4  items-center justify-center">
                    <div className="card card-border bg-base-100 w-56">
                        <div className="card-body">
                            <h2 className="card-title"><FaCode size={40} className="text-primary bg-black px-2 rounded" />
                                Frontend</h2>
                            <p className="font-raleway" >Building responsive, interactive interfaces with React, Next.js, and modern CSS frameworks.</p>
                        </div>
                    </div>
                    <div className="card card-border bg-base-100 w-56">
                        <div className="card-body">
                            <h2 className="card-title"><FaDatabase
                                size={40} className="text-primary bg-black px-2 rounded" />
                                Backend</h2>
                            <p className="font-raleway" >Developing robust APIs, microservices, and server-side logic with Node.js, Express, and databases.</p>
                        </div>
                    </div>
                    <div className="card card-border bg-base-100 w-56">
                        <div className="card-body">
                            <h2 className="card-title"><GoStack size={40} className="text-primary bg-black px-2 rounded" />
                                Full Stack</h2>
                            <p className="font-raleway" >End-to-end development from database design to deployment, integrating frontend and backend seamlessly..</p>
                        </div>
                    </div>
                    <div className="card card-border bg-base-100 w-56">
                        <div className="card-body">
                            <h2 className="card-title"><VscThinking size={40} className="text-primary bg-black px-2 rounded" />
                                Ai Integration</h2>
                            <p className="font-raleway" >Exploring machine learning, intelligent automation, and AI-powered features for modern applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;