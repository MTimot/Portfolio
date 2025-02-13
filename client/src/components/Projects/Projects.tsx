import { useEffect, useState } from "react";
import "./Project.css";
import { Link } from "react-router-dom";
function Project() {
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
  }, []);
  return (
    <article className="project-article" id="projets">
      <h2 className="project-h2-title">Mes projets</h2>
      <div className="project-all-cards">
        {project.map((element) => (
          <section key={element.id} className="project-card">
            <h3 className="project-title">{element.title}</h3>
            <img className="project-img" src={element.main_screen} alt="" />
            <p className="project-p">{element.technos}</p>
            <Link to={`/project/${element.id}`}>
              <button className="project-button" type="button">
                Détails
              </button>
            </Link>
          </section>
        ))}
      </div>
    </article>
  );
}

export default Project;
