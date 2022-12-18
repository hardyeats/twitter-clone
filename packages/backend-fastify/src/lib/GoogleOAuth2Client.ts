import { OAuth2Client } from "google-auth-library";

export class GoogleOAuth2Client extends OAuth2Client {
  private static instanse: GoogleOAuth2Client;
  public static getInstance(): GoogleOAuth2Client {
    if (!GoogleOAuth2Client.instanse) {
      GoogleOAuth2Client.instanse = new OAuth2Client(
        process.env.GOOGLE_CLIENT_ID
      );
    }
    return GoogleOAuth2Client.instanse;
  }
}
