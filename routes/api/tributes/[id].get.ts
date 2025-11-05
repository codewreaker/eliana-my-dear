// server/routes/api/tributes/[id].get.ts
// Optional: Get single tribute by ID
import { defineHandler, getRouterParam, HTTPError } from 'nitro/h3';
import supabase from '../../../utils/supabase';
import type { Tribute } from '../../../src/types';

export default defineHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');

    if (!id) {
      throw new HTTPError({
        statusCode: 400,
        message: 'ID parameter is required'
      });
    }

    const { data: tribute, error } = await supabase
      .from('tributes')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !tribute) {
      throw new HTTPError({
        statusCode: 404,
        message: 'Tribute not found'
      });
    }

    return tribute as Tribute;
  } catch (error) {
    if (error instanceof HTTPError) {
      throw error;
    }
    throw new HTTPError({
      statusCode: 500,
      message: 'Failed to fetch tribute'
    });
  }
});