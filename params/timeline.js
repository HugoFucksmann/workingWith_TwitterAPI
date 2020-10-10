const Twit = require("twit");
require("dotenv").config();

const T = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
});


const paramUser_timeline = {
  screen_name: "omarperotti",
  include_rts: false,
  count: 3,
};

module.exports = {
  T,
  paramUser_timeline,
};