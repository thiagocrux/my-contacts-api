import { Client } from 'pg';

const client = new Client({
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_HOST_PORT),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
});

client.connect();

export async function query(query: string, values?: string[]) {
  const { rows } = await client.query(query, values);
  return rows;
}
