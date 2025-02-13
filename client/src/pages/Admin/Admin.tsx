import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

function Admin() {
  interface Project {
    id: number;
    title: string;
    technos: string;
    main_screen: string;
    screenshot2: string;
    screenshot3: string;
    description: string;
  }

  const [project, setProject] = useState([] as Project[]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/project`)
      .then((response) => response.json())
      .then((data) => setProject(data));
  });

  return (
    <main className="main-admin">
      <Link to="/newProject">
        <h2>J'ai fait un nouveau projet et je veux l'ajouter !!</h2>
        <button className="admin-button" type="button">
          Ajouter
        </button>
      </Link>
      <ul className="ul-admin">
        <h2>
          Mes projets sont supers.. T'es sûr de vouloir en modifier ou les
          supprimer ??
        </h2>
        {project.map((project) => (
          <li key={project.id} className="list-admin">
            {project.title}
            <div className="admin-buttons">
              <Link to={`/EditProject/${project.id}`}>
                <button className="admin-button" type="button">
                  Editer..
                </button>
              </Link>
              <Link to={`/DeleteProject/${project.id}`}>
                <button className="admin-button" type="button">
                  ......Supprimer.....
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default Admin;
