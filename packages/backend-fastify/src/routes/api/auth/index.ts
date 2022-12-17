import { FastifyPluginAsync } from "fastify";

const authRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get("/", () => {
    return "auth root route";
  });
};
export default authRoute;
