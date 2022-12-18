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
    "/register/google",
    {
      schema: {
        body: RegisterGoogle,
      },
    },
    (request) => {
      const { credential } = request.body;
      console.log(credential);
      return "auth register google route";
    }
  );
};
export default authRoute;
