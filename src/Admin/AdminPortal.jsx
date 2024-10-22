import { useState } from "react";
import "./AdminPortal.css"; // Import the updated CSS file

const AdminPortal = () => {
  const [project, setProject] = useState({
    title: "",
    category: "React", // Default value for category
    image: "",
    live: "",
    source: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://portfolio-backend-rnzt.onrender.com/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(project),
        }
      );

      if (response.ok) {
        // Reset form or show success message
        setProject({
          title: "",
          category: "React", // Reset category to default after submit
          image: "",
          live: "",
          source: "",
        });
        alert("Project added successfully!");
      } else {
        throw new Error("Failed to add project");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error adding the project.");
    }
  };

  return (
    <div className="admin-portal">
      {" "}
      {/* Apply the CSS class */}
      <h1>Admin Portal</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            name="category"
            value={project.category}
            onChange={handleChange}
            required
          >
            <option value="React">React</option>
            <option value="Next">Next</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={project.image}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Live Link:</label>
          <input
            type="text"
            name="live"
            value={project.live}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Source Link:</label>
          <input
            type="text"
            name="source"
            value={project.source}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AdminPortal;
