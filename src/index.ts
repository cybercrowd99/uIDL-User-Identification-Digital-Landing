export default {
  async fetch(
    request: Request,
    env: unknown,
    ctx: ExecutionContext
  ): Promise<Response> {
    return new Response(
      "uIDL User Identification Digital Landing online",
      {
        status: 200,
        headers: {
          "content-type": "text/plain"
        }
      }
    );
  }
};
