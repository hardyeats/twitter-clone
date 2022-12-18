import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "DevSecretKey";

if (process.env.JWT_SECRET === undefined) {
  console.warn("JWT_SECRET is not defined in .env file");
}
