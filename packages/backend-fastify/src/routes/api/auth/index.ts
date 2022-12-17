import { FastifyPluginAsync } from "fastify";
import UsersService from "../../../services/users.service";
import { registerSchema } from "./schema";

const authRoute: FastifyPluginAsync = async (fastify) => {
  const usersService = UsersService.getInstance();

  fastify.get("/", () => {
    return "auth root route";
  });

  fastify.post("/register", { schema: registerSchema }, () => {
    return "auth register route";
  });
};
export default authRoute;
