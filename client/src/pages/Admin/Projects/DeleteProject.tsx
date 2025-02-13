import { useParams } from "react-router-dom";
import ProjectDeleteForm from "../../../components/Projects/ProjectDeleteForm";

function ProjectDelete() {
  const { id } = useParams();
  const numberId = Number(id);

  return (
    <main className="form-event-main-container">
      <h1>NON ATTENTION N'APPUIE SURTOUT PAS SUR LE BOUTON</h1>
      <ProjectDeleteForm id={numberId}>Supprimer</ProjectDeleteForm>
    </main>
  );
}
export default ProjectDelete;
