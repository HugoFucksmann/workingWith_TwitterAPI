const { T } = require("../params/timeline");



const findIdByRt = async (req, res) => {

    const twId = req.params.id
    try {
      let retweetsInfo = await T.get(`statuses/retweets/${twId}`).then(
        (res) => {
          if (0 < res.data.length) {
            const user = res.data.map((res) => {
              return {
                name: res.user.name,
                user: res.user.screen_name,
                uid: res.user.id_str,
                location: res.user.location,
              };
            });
            return user;
          } else {
            return { msg: "no hay rtws" };
          }
        }
      );

      res.json({
        ok: true,
        retweetsInfo,
      });

    } catch (err) {
      res.status(500).json({
        ok: false,
        msg: "Error :(",
        err,
      });
    }

    


}

module.exports = {
  findIdByRt,
};