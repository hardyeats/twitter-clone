import { Static, Type } from "@sinclair/typebox";

export const RegisterGoogle = Type.Object({
  credential: Type.String(),
});
export type RegisterGoogleType = Static<typeof RegisterGoogle>;
