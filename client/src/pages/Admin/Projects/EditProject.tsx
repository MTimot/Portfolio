import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectForm from "../../../components/Projects/ProjectForm";

interface Project {
  id: number;
  title: string;
  technos: string;
  main_screen: string;
  screenshot2: string;
  screenshot3: string;
  description: string;
}
function ProjectEdit() {
  const { id } = useParams();
  const [project, setProject] = useState(null as null | Project);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/project/${id}`)
      .then((response) => response.json())
      .then((data: Project) => setProject(data));
  }, [id]);

  return (
    project && (
      <ProjectForm
        defaultValue={project}
        onSubmit={(projectData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/project/${id}`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(projectData),
          }).then((response) => {
            if (response.status === 204) {
              navigate(`/project/${project.id}`);
            }
          });
        }}
      >
        Modifier
      </ProjectForm>
    )
  );
}

export default ProjectEdit;
