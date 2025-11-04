import { defineHandler, readBody, HTTPError } from 'nitro/h3';

// import pool from '../../src/mysql';

// import { ResultSetHeader } from 'mysql2';

interface TributeBody {
    name: string;
    message: string;
}

const getUuid = () => (Math.random())

export default defineHandler(async (event) => {
    try {
        const body = (await readBody<TributeBody>(event)) ?? { name: '', message: '' };

        if (!body.name || !body.message) {
            new HTTPError({
                statusCode: 400,
                message: 'Name and message are required'
            });
        }
        console.log(body.message)
        // const [result] = await pool.query(
        //   'INSERT INTO visitor_tributes (name, message) VALUES (?, ?)',
        //   [body.name, body.message]
        // ) as unknown as [ResultSetHeader];
        const id = getUuid();

        localStorage.setItem(String(id), JSON.stringify({
            id,
            name: body.name,
            message: body.message,
            created_at: (new Date()).toISOString()
        }))

        return {
            //   id: result.insertId,
            id,
            name: body.name,
            message: body.message
        };
    } catch (error: unknown) {
        if (error instanceof Error && 'statusCode' in error && error.statusCode === 400) {
            throw error;
        }
        new HTTPError({
            statusCode: 500,
            message: 'Failed to create tribute'
        });
    }
});