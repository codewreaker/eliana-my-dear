// server/routes/api/tributes/[id].delete.ts
// Optional: Delete tribute by ID
import { defineHandler, getRouterParam, HTTPError } from 'nitro/h3';
import supabase from '../../../utils/supabase';

export default defineHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');

    if (!id) {
      throw new HTTPError({
        statusCode: 400,
        message: 'ID parameter is required'
      });
    }

    const { error } = await supabase
      .from('tributes')
      .delete()
      .eq('id', id);

    if (error) {
      throw new HTTPError({
        statusCode: 500,
        message: `Database error: ${error.message}`
      });
    }

    return { success: true, id };
  } catch (error) {
    if (error instanceof HTTPError) {
      throw error;
    }
    throw new HTTPError({
      statusCode: 500,
      message: 'Failed to delete tribute'
    });
  }
});