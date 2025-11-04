/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineHandler, createError } from 'nitro/h3';
import pool from '../../src/mysql';

export default defineHandler(async (event) => {
  try {
    const [rows] = await pool.query('SELECT * FROM visitor_tributes ORDER BY created_at DESC');
    return rows;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch tributes'
    });
  }
});