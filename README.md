# Gatsby / Strapi Authentication Demo

This is a fork of [Gatsby Simple Auth](https://github.com/gatsbyjs/gatsby/tree/master/examples/simple-auth).

I did some modifications to make it work with Strapi API instead of using a hardcoded user.

-   I added [axios](https://github.com/axios/axios) to the dev packages
-   I'm using axios to get the jwt token after an user inputs an existing username/email & password
-   Logged in users will get redirected to a page after successful attempt
-   Logged out users are redirected to the login page if they attempt to visit private routes

## Quick Note

I did this as a proof of concept for a localy used application and in any case it should not be used as a production-ready authentication.
