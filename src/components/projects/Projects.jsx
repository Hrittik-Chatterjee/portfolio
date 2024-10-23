import { useEffect, useState } from "react";
import Projectitems from "./Projectitems";

const Projects = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-rnzt.onrender.com/projects"
        );
        const data = await response.json();
        setAllProjects(data);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(allProjects);
    } else {
      const filteredProjects = allProjects.filter(
        (project) => project.category === item.name
      );
      setProjects(filteredProjects);
    }
  }, [item, allProjects]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="project__filters">
        {["All", "React", "Next", "Others"].map((category, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              className={`${
                active === index ? "active-project" : ""
              } project__item`}
              key={index}
            >
              {category}
            </span>
          );
        })}
      </div>
      <div className="project__container container grid">
        {projects.map((project) => {
          return <Projectitems item={project} key={project._id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
