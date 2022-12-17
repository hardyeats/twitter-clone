import S from "fluent-json-schema";

export const registerSchema = {
  body: S.object()
    .prop("username", S.string().required())
    .prop("password", S.string().required()),
};
