import request from "utils/request";

import { UserAuth } from "./types";

export const signIn = (data: UserAuth): any => {
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
