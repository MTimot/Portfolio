import { useNavigate } from "react-router-dom";
import ProjectForm from "../../../components/Projects/ProjectForm";

function NewProject() {
  const navigate = useNavigate();
  const newProject = {
    title: "",
    technos: "",
    main_screen: "",
    screenshot2: "",
    screenshot3: "",
    description: "",
  };
  return (
    <>
      <ProjectForm
        defaultValue={newProject}
        onSubmit={(projectData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/project`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(projectData),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.insertId) {
                navigate(`/project/${data.insertId}`);
              }
            });
        }}
      >
        Ajouter
      </ProjectForm>
    </>
  );
}
export default NewProject;
