export interface UserAuth {
  username: string;
  password: string;
}

export interface UserAuthResponse {
  message: string;
  token: string;
}
