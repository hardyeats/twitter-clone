import { FastifyPluginAsync } from "fastify";

const authRoute: FastifyPluginAsync = async (fastify) => {
  const usersService = UsersService.getInstance();

  fastify.get("/", () => {
    return "auth root route";
  });

  fastify.post("/register", () => {
    return "auth register route";
  });
};
export default authRoute;
