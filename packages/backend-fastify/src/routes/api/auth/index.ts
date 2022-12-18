import { FastifyPluginAsync } from "fastify";
import UsersService from "../../../services/users.service.js";
import { registerGoogleSchema, registerSchema } from "./schema.js";

const authRoute: FastifyPluginAsync = async (fastify) => {
  const usersService = UsersService.getInstance();

  fastify.get("/", () => {
    return "auth root route";
  });

  fastify.post("/register", { schema: registerSchema }, () => {
    return "auth register route";
  });

  fastify.post<{
    Body: {
      credential: string;
    };
  }>("/register/google", { schema: registerGoogleSchema }, (request) => {
    const { credential } = request.body;
    console.log(credential);
    return "auth register google route";
  });
};
export default authRoute;
