import { PrismaClient } from "@prisma/client";

export class DBClient extends PrismaClient {
  private static instance: DBClient;
  public static getInstance(): DBClient {
    if (!DBClient.instance) {
      DBClient.instance = new PrismaClient();
    }
    return this.instance;
  }
}
