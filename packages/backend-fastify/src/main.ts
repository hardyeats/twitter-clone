import Fastify from "fastify";
console.log("hello world");
const server = Fastify();
server.get("/ping", async () => {
  return "pong";
});

const port = Number(process.env.PORT) || 4000;
server.listen({ port }, () => {
  console.log(`Server running on port ${port}`);
});
