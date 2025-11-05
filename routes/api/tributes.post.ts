// server/routes/api/tributes.post.ts
import { defineHandler, readBody, HTTPError } from 'nitro/h3';
import supabase from '../../utils/supabase';
import type { Tribute } from '../../src/types';

interface TributeBody {
  name: string;
  message: string;
  email?:string;
}

export default defineHandler(async (event) => {
  try {
    const body = (await readBody<TributeBody>(event)) ?? { name: '', message: '', email:'' };

    if (!body.name || !body.message) {
      throw new HTTPError({
        statusCode: 400,
        message: 'Name and message are required'
      });
    }

    const { data: tribute, error } = await supabase
      .from('tributes')
      .insert({
        name: body.name,
        message: body.message,
        email: body.email
      })
      .select()
      .single();

    if (error) {
      throw new HTTPError({
        statusCode: 500,
        message: `Database error: ${error.message}`
      });
    }

    return tribute as Tribute;
  } catch (error: unknown) {
    if (error instanceof HTTPError) {
      throw error;
    }
    throw new HTTPError({
      statusCode: 500,
      message: 'Failed to create tribute'
    });
  }
});