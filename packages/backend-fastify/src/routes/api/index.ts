import { FastifyPluginAsync } from "fastify";
import authRoute from "./auth";

const api: FastifyPluginAsync = async (fastify) => {
  fastify.get("/", () => {
    return "api route";
  });
  fastify.register(authRoute, {
    prefix: "/auth",
  });
};

export default api;
