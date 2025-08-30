import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'my-contacts',
});

client.connect();

export async function query(query: string, values?: string[]) {
  const { rows } = await client.query(query, values);
  return rows;
}
