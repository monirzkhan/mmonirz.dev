import "./Skills.css";
import { skillCategories } from "./SkillsData";


export default function Skills() {
    return (
        <section className="skills section p-12 " id="skills">

            <div className="section-title md:-mb-120">

                 <h1 className="text-3xl font-raleway text-accent">Tech <span className="text-4xl font-bricolage font-bold text-secondary">Stack</span></h1>

                <h3 className="text-xl font-bricolage mt-2 italic "> Production-grade tools across the full stack, from UI to cloud.</h3>

            </div>

            <div className="skills-grid">

                {skillCategories.map((category) => (

                    <div className="skill-card" key={category.title}>

                        <div
                            className="skill-heading"
                            style={{
                                borderLeft: `4px solid ${category.color}`,
                            }}
                        >

                            <div>

                                <h3>{category.title}</h3>

                                <small>{category.subtitle}</small>

                            </div>

                        </div>

                        <div className="skill-icons">

                            {category.skills.map((skill) => {

                                const Icon = skill.icon;

                                return (
                                    <div className="icon-box" key={skill.name}>

                                        <Icon
                                            size={36}
                                            color={skill.color}
                                        />

                                        <span>{skill.name}</span>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}