require("dotenv").config();
const {WorkOS} = require('@workos-inc/node');
const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientID = process.env.WORKOS_CLIENT_ID;

module.exports = {
    sso: async (req, res) => {
        // ... The provider to authenticate with
        const provider =  'GoogleOAuth'
        // ... The URI WorkOS should callback to post-authentication
        const redirectURI = process.env.REDIRECT_URI 
      
        const authorizationURL = workos.sso.getAuthorizationURL({
          provider,
          redirectURI,
          clientID,
        });
    res.json({authUrl: authorizationURL})
    // res.redirect(authorizationURL)
    },
  };