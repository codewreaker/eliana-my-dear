import { defineHandler, readBody, createError } from 'nitro/h3';
import pool from '../../src/mysql';

import { ResultSetHeader } from 'mysql2';

interface TributeBody {
  name: string;
  message: string;
}



export default defineHandler(async (event) => {
  try {
    const body = (await readBody<TributeBody>(event)) ?? { name: '', message: '' };
    
    if (!body.name || !body.message) {
      throw createError({
        statusCode: 400,
        message: 'Name and message are required'
      });
    }

    const [result] = await pool.query(
      'INSERT INTO visitor_tributes (name, message) VALUES (?, ?)',
      [body.name, body.message]
    ) as unknown as [ResultSetHeader];

    return {
      id: result.insertId,
      name: body.name,
      message: body.message
    };
  } catch (error: unknown) {
    if (error instanceof Error && 'statusCode' in error && error.statusCode === 400) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      message: 'Failed to create tribute'
    });
  }
});