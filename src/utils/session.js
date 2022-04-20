import Cookies from "cookies";
import jwtDecode from "jwt-decode";

const noop = (context, user) => ({
  props: {
    user,
  },
});

const sessionOptions = {
  cookieName: process.env.NEXT_PUBLIC_COOKIE_NAME,
  cookieOptions: {
    maxAge: undefined,
    secure: false,
  },
};

const getUser = (context) => {
  try {
    const cookies = new Cookies(context.req, context.res);
    const token = cookies.get(sessionOptions.cookieName);
    const decoded = jwtDecode(token);
    const currentTime = new Date().getTime() / 1000;

    if (currentTime > decoded.exp) {
      return null;
    }
    return decoded;
  } catch (error) {
    return null;
  }
};

const withSession =
  ({ action }, handler = noop) =>
    (context) => {
      const user = getUser(context);

      if (action === "RIA" && user) {
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }

      if (action === "RINA" && !user) {
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }

      return handler(context, user);
    };

export { sessionOptions, withSession };
