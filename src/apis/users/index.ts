import request from "utils/request";

import { UserAuthParams, UserAuthResponse } from "./types";

export const signIn = (data: UserAuthParams): Promise<UserAuthResponse> => {
  const { username, password } = data;
  const options = {
    url: "users/login",
    body: {
      userName: username,
      password,
    },
  };
  return request.post(options.url, options.body);
};
