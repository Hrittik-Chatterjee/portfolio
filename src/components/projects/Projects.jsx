import { useEffect, useState } from "react";
import ProjectItems from "./ProjectItems.jsx";

const Projects = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]); // Store all projects here for filtering
  const [active, setActive] = useState(0);

  // Fetch project data from the server
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-rnzt.onrender.com/projects"
        );
        const data = await response.json();
        setAllProjects(data); // Store all fetched projects
        setProjects(data); // Initialize the project list
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []); // Runs once when the component mounts

  // Filter projects based on category
  useEffect(() => {
    if (item.name === "All") {
      setProjects(allProjects); // Show all projects if "All" is selected
    } else {
      const filteredProjects = allProjects.filter(
        (project) => project.category === item.name
      );
      setProjects(filteredProjects);
    }
  }, [item, allProjects]);

  // Handle category change
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
          return <ProjectItems item={project} key={project._id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
