import Backendskills from "./Backendskills";
import FrontendSkills from "./FrontendSkills";
import './skills.css'

const Skills = () => {
    return (
       <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>
        <div className="skills__container container grid">
            <FrontendSkills></FrontendSkills> 
            <Backendskills></Backendskills>
        </div>
       </section>
    );
};

export default Skills;