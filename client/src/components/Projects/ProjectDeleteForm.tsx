import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type ProjectDeleteFormProps = {
  id: number;
  children: ReactNode;
};

function ProjectDeleteForm({ id, children }: ProjectDeleteFormProps) {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        fetch(`${import.meta.env.VITE_API_URL}/api/project/${id}`, {
          method: "delete",
        }).then((response) => {
          if (response.status === 204) {
            navigate("/admin");
          }
        });
      }}
    >
      <button type="submit" className="admin-form-event-button">
        {children}
      </button>
    </form>
  );
}

export default ProjectDeleteForm;
