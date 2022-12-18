import Fastify, { fastify } from "fastify";
import cors from "@fastify/cors";
import routes from "./routes/index.js";

const server = Fastify({ logger: true });
//TODO: 실행환경에 따라 허용하는 Origin을 달리 설정할 것.
await server.register(cors, {});
server.get("/ping", async () => {
  return "pong";
});

server.register(routes);

const port = Number(process.env.PORT) || 4000;
server.listen({ port });
