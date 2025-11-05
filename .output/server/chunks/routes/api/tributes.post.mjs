import { defineHandler, readBody, HTTPError } from "nitro/h3";
const getUuid = () => Math.floor(Math.random() * 1e6);
const tributes_post = defineHandler(async (event) => {
  try {
    const body = await readBody(event) ?? { name: "", message: "" };
    if (!body.name || !body.message) {
      throw new HTTPError({
        statusCode: 400,
        message: "Name and message are required"
      });
    }
    const id = getUuid();
    const created_at = (/* @__PURE__ */ new Date()).toISOString();
    return {
      // id: result.insertId,
      id,
      created_at,
      name: body.name,
      message: body.message
    };
  } catch (error) {
    if (error instanceof Error && "statusCode" in error && error.statusCode === 400) {
      throw error;
    }
    throw new HTTPError({
      statusCode: 500,
      message: "Failed to create tribute"
    });
  }
});
export {
  tributes_post as default
};
