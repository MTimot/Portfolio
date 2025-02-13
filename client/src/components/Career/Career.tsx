import { useEffect, useState } from "react";
import "./Career.css";
function Career() {
  interface Career {
    id: number;
    title: string;
    logo: string;
    description: string;
  }
  const [career, setCareer] = useState([] as Career[]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/career`)
      .then((response) => response.json())
      .then((data) => setCareer(data));
  }, []);

  return (
    <article className="career-article" id="parcours">
      <h2 className="career-h2-title">Mon parcours</h2>
      <div className="career-all-cards">
        {career.map((element) => (
          <section className="career-card" key={element.id}>
            <div className="career-card-up">
              <h3 className="career-title">{element.title}</h3>
              <img className="career-logo" src={element.logo} alt="" />
            </div>
            <div className="career-card-down">
              <p className="career-p">{element.description}</p>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
export default Career;
