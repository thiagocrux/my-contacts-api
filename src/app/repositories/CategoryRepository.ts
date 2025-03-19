import { query } from '../../database';

class CategoryRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await query(
      `
        SELECT * FROM categories
        ORDER BY name ${direction}
      `,
    );

    return rows;
  }

  async findById(id: string) {
    const [row] = await query(
      `
        SELECT * FROM categories
        WHERE id = $1
      `,
      [id],
    );

    return row;
  }

  async findByName(name: string) {
    const [row] = await query(
      `
        SELECT * FROM categories
        WHERE name = $1
      `,
      [name],
    );

    return row;
  }

  async create(name: string) {
    const [row] = await query(
      `
        INSERT INTO categories(name)
        VALUES($1)
        RETURNING *
      `,
      [name],
    );

    return row;
  }

  async update(id: string, name: string) {
    const [row] = await query(
      `
        UPDATE categories
        SET name = $1
        WHERE id = $2
        RETURNING *
      `,
      [name, id],
    );

    return row;
  }

  async delete(id: string) {
    const deleteOperation = await query(
      `
        DELETE FROM categories
        WHERE id = $1
      `,
      [id],
    );

    return deleteOperation;
  }
}

export default new CategoryRepository();
