// server/routes/api/tributes.get.ts
import { defineHandler, HTTPError } from 'nitro/h3';
import supabase from '../../utils/supabase';
import type { Tribute } from '../../src/types';

export default defineHandler(async () => {
  try {
    const { data: tributes, error } = await supabase
      .from('tributes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new HTTPError({
        statusCode: 500,
        message: `Database error: ${error.message}`
      });
    }

    return tributes as Tribute[];
  } catch (error) {
    if (error instanceof HTTPError) {
      throw error;
    }
    throw new HTTPError({
      statusCode: 500,
      message: 'Failed to fetch tributes'
    });
  }
});