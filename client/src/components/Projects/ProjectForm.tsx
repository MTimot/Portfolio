import type { ReactNode } from "react";

type ProjectData = {
  title: string;
  technos: string;
  main_screen: string;
  screenshot2: string;
  screenshot3: string;
  description: string;
};
interface ProjectFormProps {
  children: ReactNode;
  defaultValue: ProjectData;
  onSubmit: (event: ProjectData) => void;
}
function ProjectForm({ children, defaultValue, onSubmit }: ProjectFormProps) {
  return (
    <form
      className="form-event"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const title = formData.get("title") as string;
        const technos = formData.get("technos") as string;
        const main_screen = formData.get("main_screen") as string;
        const screenshot2 = formData.get("screenshot2") as string;
        const screenshot3 = formData.get("screenshot3") as string;
        const description = formData.get("description") as string;
        onSubmit({
          title,
          technos,
          main_screen,
          screenshot2,
          screenshot3,
          description,
        });
      }}
    >
      <section className="form-event-section">
        <label htmlFor="title">Nom du projet </label>
        <textarea
          className="form-event-textarea"
          name="title"
          id="title"
          defaultValue={defaultValue.title}
          placeholder="Titre"
        />
      </section>
      <section className="form-event-section">
        <label htmlFor="technos">Technos</label>
        <textarea
          className="form-event-textarea"
          name="technos"
          id="technos"
          defaultValue={defaultValue.technos}
          placeholder="Technologies utilisées"
        />
      </section>
      <section className="form-event-section">
        <label htmlFor="main_screen">Screenshot principal</label>
        <textarea
          className="form-event-textarea"
          name="main_screen"
          id="main_screen"
          defaultValue={defaultValue.main_screen}
          placeholder="main_screen"
        />
      </section>
      <section className="form-event-section">
        <label htmlFor="screenshot2">Screenshot 2</label>
        <textarea
          className="form-event-textarea"
          id="screenshot2"
          name="screenshot2"
          defaultValue={defaultValue.screenshot2}
          placeholder="Screenshot 2"
        />
      </section>
      <section className="form-event-section">
        <label htmlFor="screenshot3">Screenshot 3</label>
        <textarea
          className="form-event-textarea"
          name="screenshot3"
          id="screenshot3"
          defaultValue={defaultValue.screenshot3}
          placeholder="Screenshot 3"
        />
      </section>
      <section className="form-event-section">
        <label htmlFor="description">Description</label>
        <input
          className="form-event-textarea"
          type="text"
          name="description"
          id="description"
          defaultValue={defaultValue.description}
          placeholder="Description"
        />
      </section>
      <button type="submit">{children}</button>
    </form>
  );
}
export default ProjectForm;
