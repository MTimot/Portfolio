import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Career from "../../components/Career/Career";
import Project from "../../components/Projects/Projects";
import Contact from "../../components/contact/Contact";

function Homepage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  }, [location]);

  return (
    <main>
      <article className="photo-card">
        <img src="/photo.jpg" alt="" className="picture-of-me" />
        <p className="introduction-p">
          Passionné par le développement web et les expériences interactives,
          j’aime créer des projets immersifs qui allient design et technologie.
          Toujours en quête d’apprentissage, je m’amuse à expérimenter avec des
          outils comme React pour donner vie à mes idées. Bienvenue dans mon
          univers !
        </p>
      </article>
      <Career />
      <Project />
      <Contact />
    </main>
  );
}
export default Homepage;
