import request from "utils/request";

export const signIn = ({ username, password }) => {
    const options = {
        url: "users/login",
        body: {
            userName: username,
            password
        },
    };
    return request.post(options.url, options.body);
};
