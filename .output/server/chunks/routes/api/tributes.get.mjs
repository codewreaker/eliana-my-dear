import { defineHandler, createError } from "nitro/h3";
const tributes_get = defineHandler(async (event) => {
  try {
    return [
      {
        id: 1,
        name: "Jane Doe",
        message: "Forever in our hearts — your kindness and laughter brightened every room.",
        created_at: "2025-10-31T12:34:56.000Z"
      },
      {
        id: 2,
        name: "Samuel K.",
        message: "Thank you for the lessons and the memories. Always remembered.",
        created_at: "2025-09-15T09:12:00.000Z"
      },
      {
        id: 3,
        name: "Amina O.",
        message: "A beautiful soul who touched so many lives. Rest peacefully.",
        created_at: "2025-08-02T18:45:30.000Z"
      },
      {
        id: 4,
        name: "Community Guest",
        message: "Your legacy lives on through the lives you changed.",
        created_at: "2025-07-20T07:00:00.000Z"
      }
    ];
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to fetch tributes"
    });
  }
});
export {
  tributes_get as default
};
