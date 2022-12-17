import fastify, { FastifyPluginAsync } from "fastify";
import api from "./api";

const routes: FastifyPluginAsync = async (fastify) => {
  fastify.get("/", () => {
    return "root route";
  });
  fastify.register(api, { prefix: "/api" });
};

export default routes;
