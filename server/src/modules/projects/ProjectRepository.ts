import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Project = {
  id: number;
  title: string;
  technos: string;
  main_screen: string;
  screenshot2: string;
  screeshot3: string;
  description: string;
};

class ProjectRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from project");

    // Return the array of items
    return rows as Project[];
  }
}

export default new ProjectRepository();
