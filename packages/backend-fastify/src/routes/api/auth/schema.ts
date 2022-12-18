import S from "fluent-json-schema";

export const registerSchema = {
  body: S.object()
    .prop("username", S.string().required())
    .prop("password", S.string().required()),
};

export const registerGoogleSchema = {
  body: S.object().prop("credential", S.string().required()),
};

export const registerGoogleBodySchema = S.object().prop(
  "credential",
  S.string().required()
);
