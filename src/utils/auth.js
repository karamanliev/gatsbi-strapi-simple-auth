import axios from "axios";

const isBrowser = typeof window !== `undefined`;

const getUser = () =>
    window.localStorage.gatsbyUser
        ? JSON.parse(window.localStorage.gatsbyUser)
        : {};

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user));

export const handleLogin = (
    { username, password },
    fetchUrl,
    successLoginCallback
) => {
    if (!isBrowser) return false;

    // Request API.
    const loginFetch = (inputUser, inputPass) => {
        axios
            .post(fetchUrl, {
                identifier: inputUser,
                password: inputPass
            })
            .then(response => {
                // Handle success.
                console.log("User profile", response.data);
                setUser({
                    name: response.data.user.username,
                    legalName: response.data.user.legalName,
                    email: response.data.user.email,
                    authenicated: true
                });
            })
            .catch(error => {
                // Handle error.
                console.log("An error occurred:", error);
                console.log("Your login attempt was not successfull");
                return false;
            })
            .finally(() => {
                const user = getUser();
                if (user.authenicated) {
                    console.log("User logged in successfully!");
                    successLoginCallback();
                }
            });
    };

    loginFetch(username, password);
};

export let isLoggedIn = () => {
    if (!isBrowser) return false;

    const user = getUser();

    if (user.authenicated) {
        return true;
    }
};

export const getCurrentUser = () => isBrowser && getUser();

export const logout = callback => {
    if (!isBrowser) return;

    console.log(`Ensuring the \`gatsbyUser\` property exists.`);
    setUser({});
    callback();
};
