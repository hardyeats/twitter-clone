import { FastifyPluginAsync } from "fastify";

const api: FastifyPluginAsync = async (fastify) => {
  fastify.get("/", () => {
    return "api route";
  });
};

export default api;
