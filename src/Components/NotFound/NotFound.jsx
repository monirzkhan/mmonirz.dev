
import { FiArrowLeft, FiHome } from "react-icons/fi";

import { Link } from "react-router";
import FuzzyText from "./FuzzYText";

const NotFound = () => {
    return (
        <section className="min-h-screen bg-[#050816] flex items-center justify-center px-6">

            <div className="text-center max-w-2xl">

                {/* Fuzzy 404 */}

                <div className="flex justify-center mb-8">

                    <FuzzyText
                        fontSize="clamp(6rem,18vw,14rem)"
                        color="#6366f1"
                        baseIntensity={0.15}
                        hoverIntensity={0.8}
                        transitionDuration={200}
                        clickEffect
                        glitchMode
                        glitchInterval={3000}
                        glitchDuration={180}
                    >
                        404
                    </FuzzyText>

                </div>

                <h1 className="text-4xl font-bold text-white mb-5">

                    Page Not Found

                </h1>

                <p className="text-slate-400 text-lg leading-8 mb-10">

                    Looks like you've wandered into unknown territory.
                    The page you're searching for doesn't exist,
                    has been moved, or the URL is incorrect.

                </p>

                <div className="flex flex-wrap justify-center gap-5">

                    <Link
                        to="/"
                        className="px-7 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition flex items-center gap-2 text-white font-medium"
                    >
                        <FiHome />

                        Back Home
                    </Link>

                    <a
                        href="/#contact"
                        className="px-7 py-3 rounded-xl border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition flex items-center gap-2"
                    >
                        <FiArrowLeft />

                        Contact Me
                    </a>

                </div>

            </div>

        </section>
    );
};

export default NotFound;