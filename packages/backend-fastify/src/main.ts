import Fastify from "fastify";
import routes from "./routes";

const server = Fastify({ logger: true });
server.get("/ping", async () => {
  return "pong";
});

server.register(routes);

const port = Number(process.env.PORT) || 4000;
server.listen({ port });
