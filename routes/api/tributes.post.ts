import { defineHandler, readBody, HTTPError } from 'nitro/h3';
// import pool from '../../src/mysql';
// import { ResultSetHeader } from 'mysql2';
import type { Tribute } from '../../src/types';

interface TributeBody {
    name: string;
    message: string;
}

const getUuid = () => Math.floor(Math.random() * 1000000);

export default defineHandler(async (event) => {
    try {
        const body = (await readBody<TributeBody>(event)) ?? { name: '', message: '' };

        if (!body.name || !body.message) {
            throw new HTTPError({
                statusCode: 400,
                message: 'Name and message are required'
            });
        }

        // const [result] = await pool.query(
        //   'INSERT INTO visitor_tributes (name, message) VALUES (?, ?)',
        //   [body.name, body.message]
        // ) as unknown as [ResultSetHeader];
        const id = getUuid();
        const created_at = new Date().toISOString();

        // Since we're not using a database yet, we'll just return the new tribute
        // You should implement proper storage later
        return {
            // id: result.insertId,
            id,
            created_at,
            name: body.name,
            message: body.message
        };
    } catch (error: unknown) {
        if (error instanceof Error && 'statusCode' in error && error.statusCode === 400) {
            throw error;
        }
        throw new HTTPError({
            statusCode: 500,
            message: 'Failed to create tribute'
        });
    }
});