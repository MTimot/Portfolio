import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  interface Project {
    id: number;
    title: string;
    technos: string;
    main_screen: string;
    screenshot2: string;
    screeshot3: string;
    description: string;
  }
  const [project, setProject] = useState({} as Project);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/project/${id}`)
      .then((response) => response.json())
      .then((data) => setProject(data));
  });

  const { id } = useParams();
  return (
    <main>
      <h1>{project.title}</h1>
      <img src={project.main_screen} alt="" />
      <p>{project.technos}</p>
      <p>{project.description}</p>
    </main>
  );
}

export default ProjectDetails;
