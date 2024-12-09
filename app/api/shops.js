import pool from "../../lib/db";

export async function GET(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM shops');
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Database query failed' }), { status: 500 });
  }
}