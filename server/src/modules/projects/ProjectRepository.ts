import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Project = {
  id: number;
  title: string;
  technos: string;
  main_screen: string;
  screenshot2: string;
  screenshot3: string;
  description: string;
};

class ProjectRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from project");

    // Return the array of items
    return rows as Project[];
  }

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from project where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Project;
  }
  async create(project: Omit<Project, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into project (title, technos, main_screen, screenshot2, screenshot3,description) values (?, ?, ?, ?, ?, ?)",
      [
        project.title,
        project.technos,
        project.main_screen,
        project.screenshot2,
        project.screenshot3,
        project.description,
      ],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }
  async update(project: Project) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE project SET title = ?, technos = ?, main_screen = ?, screenshot2 = ?, screenshot3 = ?, description = ? WHERE id = ?",
      [
        project.title,
        project.technos,
        project.main_screen,
        project.screenshot2,
        project.screenshot3,
        project.description,
        project.id,
      ],
    );
    return result.affectedRows;
  }
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM project WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new ProjectRepository();
