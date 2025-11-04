import { Request, Response } from 'nitro/h3';
import pool from './db';

export async function getTributes(req: Request, res: Response) {
  try {
    const [rows] = await pool.query('SELECT * FROM visitor_tributes ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tributes' });
  }
}

export async function createTribute(req: Request, res: Response) {
  const { name, message } = req.body;
  
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO visitor_tributes (name, message) VALUES (?, ?)',
      [name, message]
    );
    res.status(201).json({ id: result.insertId, name, message });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create tribute' });
  }
}