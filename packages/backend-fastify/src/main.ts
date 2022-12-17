import Fastify from "fastify";
import routes from "./routes";
console.log("hello world");
const server = Fastify();
server.get("/ping", async () => {
  return "pong";
});

server.register(routes);

const port = Number(process.env.PORT) || 4000;
server.listen({ port }, () => {
  console.log(`Server running on port ${port}`);
});
