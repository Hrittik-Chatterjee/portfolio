import { useEffect, useState } from "react";
import Projectitems from "./Projectitems";
import RingLoader from "react-spinners/RingLoader";

const Projects = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch(
          "https://portfolio-backend-rnzt.onrender.com/projects"
        );
        const data = await response.json();
        setAllProjects(data);
        setProjects(data);
        setLoading(false); // Stop loading when data is fetched
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false); // Stop loading if there's an error
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

      {/* Display the RingLoader while loading */}
      {loading ? (
        <div className="loader">
          <RingLoader size={60} color={"#000000"} loading={loading} />
        </div>
      ) : (
        <div className="project__container container grid">
          {projects.map((project) => {
            return <Projectitems item={project} key={project._id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Projects;
