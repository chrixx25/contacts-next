import type { AxiosError } from "axios";

import { useRouter } from "next/router";
import { useMutation, UseMutationResult } from "react-query";
import { useCookie } from "react-use";

import { signIn } from "apis";
import { sessionOptions } from "utils/session";
import { UserAuthResponse } from "apis/users/types";

export const useAuth = (): UseMutationResult<UserAuthResponse, AxiosError> => {
  const router = useRouter();
  const [, updateCookie] = useCookie(sessionOptions.cookieName);

  return useMutation(signIn, {
    onSuccess: (data) => {
      updateCookie(data.token);
      // router.push("/");
      router.reload();
    },
  });
};
