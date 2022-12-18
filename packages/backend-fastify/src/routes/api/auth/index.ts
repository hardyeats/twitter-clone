import { FastifyPluginAsync } from "fastify";
import UsersService from "../../../services/users.service.js";
import { RegisterGoogle, RegisterGoogleType } from "./schema.js";

const authRoute: FastifyPluginAsync = async (fastify) => {
  const usersService = UsersService.getInstance();

  fastify.get("/", () => {
    return "auth root route";
  });

  fastify.post<{
    Body: RegisterGoogleType;
  }>(
    "/google",
    {
      schema: {
        body: RegisterGoogle,
      },
    },
    async (request) => {
      const { credential } = request.body;
      return await usersService.LoginOrRegisterByGoogle(credential);
    }
  );
};
export default authRoute;
