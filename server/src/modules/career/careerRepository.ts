import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Career = {
  id: number;
  title: string;
  logo: string;
  description: string;
};

class CareerRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from career");

    // Return the array of items
    return rows as Career[];
  }
}

export default new CareerRepository();
