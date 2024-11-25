import pool from '@/lib/db';

export default async function handler(req, res) {
  try {
    const [rows] = await pool.query('SELECT NOW() AS current_time');
    res.status(200).json({ success: true, current_time: rows[0].current_time });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ success: false, message: 'Database query failed', error: error.message });
  }
}