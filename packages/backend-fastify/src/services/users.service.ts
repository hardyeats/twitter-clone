import fastify from "fastify";
import { LoginTicket, TokenPayload } from "google-auth-library";
import AppError from "../lib/AppError.js";
import { GoogleOAuth2Client } from "../lib/GoogleOAuth2Client.js";
import { DBClient } from "../lib/DBClient.js";
import { User } from "@prisma/client";

export default class UsersService {
  private static instance: UsersService;
  public static getInstance(): UsersService {
    if (!UsersService.instance) {
      UsersService.instance = new UsersService();
    }
    return UsersService.instance;
  }

  async LoginOrRegisterByGoogle(credential: string) {
    const ticket = await this.verifyGoogleIdToken(credential);
    const payload = this.getGoogleLoginTicketPayload(ticket);
    const user = this.findOrCreateUserByGoogle(payload);
    console.log(user);
    return user;
  }

  private generateTokens(user: User) {}

  private async findOrCreateUserByGoogle(payload: TokenPayload): Promise<User> {
    const userTable = DBClient.getInstance().user;
    const exists = await userTable.findUnique({
      where: {
        email: payload.email,
      },
    });
    if (exists) return exists;

    const newUser = await userTable.create({
      data: {
        email: payload.email!,
        username: `${payload.given_name} ${payload.family_name}`,
        pictureUrl: payload.picture,
        googleUserId: payload.sub,
      },
    });
    return newUser;
  }

  private getGoogleLoginTicketPayload(ticket: LoginTicket): TokenPayload {
    const payload = ticket.getPayload();
    if (!payload) throw new AppError("Cannot get payload from Google", 500);
    if (!payload.email || !payload.email_verified)
      throw new AppError("Verified email not found in google account", 400);
    return payload;
  }

  private async verifyGoogleIdToken(credential: string): Promise<LoginTicket> {
    try {
      return await GoogleOAuth2Client.getInstance().verifyIdToken({
        idToken: credential,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes("Invalid token signature")
      ) {
        throw new AppError("Invalid token signature", 401);
      }
      throw error;
    }
  }
}
