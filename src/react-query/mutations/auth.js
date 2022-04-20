import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { useCookie } from "react-use";

import { signIn } from "apis";
import { sessionOptions } from "utils/session";

export const useAuth = () => {
    const router = useRouter();
    const [, updateCookie] = useCookie(sessionOptions.cookieName);

    return useMutation(signIn, {
        onSuccess: (data) => {
            updateCookie(data.token);
            //router.push("/");
            router.reload();
        },
    });
};
