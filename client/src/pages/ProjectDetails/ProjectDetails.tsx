import Slider from "@ant-design/react-slick";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectDetails.css";

function ProjectDetails() {
  interface Project {
    id: number;
    title: string;
    technos: string;
    main_screen: string;
    screenshot2: string;
    screenshot3: string;
    description: string;
  }

  const [project, setProject] = useState({} as Project);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/project/${id}`)
      .then((response) => response.json())
      .then((data) => setProject(data));
  });

  const { id } = useParams();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <main className="project-details-main">
      <h1>{project.title}</h1>
      <section className="carrousel">
        <Slider {...settings}>
          <div>
            <img
              src={project.main_screen}
              alt=""
              className="project-details-screen"
            />
          </div>
          <div>
            <img
              src={project.screenshot2}
              alt=""
              className="project-details-screen"
            />
          </div>
          <div>
            <img
              src={project.screenshot3}
              alt=""
              className="project-details-screen"
            />
          </div>
        </Slider>
      </section>
      <p>{project.technos}</p>
      <p className="project-details-description">{project.description}</p>
    </main>
  );
}

export default ProjectDetails;
