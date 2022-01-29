require("dotenv").config();
const {WorkOS} = require('@workos-inc/node');
const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientID = process.env.WORKOS_CLIENT_ID;
const url = require('url')
const querystring = require('query-string')
module.exports = {
  getProfile: async (req, res) => {
    const { code } = req.params;
    try {
        const { profile } = await workos.sso.getProfileAndToken({
            code,
            clientID,
        });
        res.json({profileData: profile})
    } catch (error) {
        console.log(error)
    }
  },
};
