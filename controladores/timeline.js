const { T, paramUser_timeline } = require("../params/timeline");
/* const tweetId = "1314376329094139904";
client.get("statuses/retweet/" + tweetId, (error, tweet, response) => {
  if (!error) {
    console.log(tweet);
  }else{
      console.log(error);
  }
}); */



const timeline_user = async ( req, res) => {

  let timeline = await T.get("statuses/user_timeline", paramUser_timeline)
    .then((res) => res)
    .then((body) => {

      let tweets = body.data.map((item) => item.text);
      let id_tw = body.data.map((item) => item.id_str);
      let name = body.data.map((item) => item.user)[0].name;
      let location = body.data.map((item) => item.user)[0].location;
      let uid = body.data.map((item) => item.user)[0].id_str;
      let user = body.data.map((item) => item.user)[0].screen_name;
      let follow = body.data.map((item) => item.user)[0].friends_count;
      let followers = body.data.map((item) => item.user)[0].followers_count;

      return { name, user, uid, location, follow, followers, tweets, id_tw };
    });
    try {
      res.status(200).json({
        ok: true,
        timeline,
      })
    } catch (err) {
      console.log(err);
      res.status(500).json({
        ok: false,
        msg: "error :(",
        err
      });
    }
}

const timeline = async (req, res) => {
  let timeline = await T.get("statuses/user_timeline", { count: 3 })
    .then((res) => res)
    .then((body) => {
      let tweets = body.data.map((item) => item.text);
      let id_tw = body.data.map((item) => item.id_str);
      let name = body.data.map((item) => item.user)[0].name;
      let location = body.data.map((item) => item.user)[0].location;
      let uid = body.data.map((item) => item.user)[0].id_str;
      let user = body.data.map((item) => item.user)[0].screen_name;
      let follow = body.data.map((item) => item.user)[0].friends_count;
      let followers = body.data.map((item) => item.user)[0].followers_count;

      return { name, user, uid, location, follow, followers, tweets, id_tw };
    });
  try {
    res.status(200).json({
      ok: true,
      timeline,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
      msg: "error :(",
      err,
    });
  }
};


module.exports = {
  timeline_user,
  timeline,
};