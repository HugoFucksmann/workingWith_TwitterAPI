let params = {
  q: "omarperotti",
  count: 5,
};

let params2 = {
  status: "hello friend, tweet send from node.js !",
};

let params3 = {
  screen_name: "omarperotti",
  include_rts: false,
  count: 3,
};

let param4 = {
  id: "1314376333095563300",
};

function gotData(err, data, response) {
  let tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(`tweet ${i}, ${tweets[i].user["name"]}: ${tweets[i].text}`);
    console.log("");
  }
}
function tweeted( err, data, response ){
    if(err){
        console.log('error!!');
        console.log(err);
    }else{
        console.log('Works!');
    }
}

function getTimeline(err, data, response) {
    let names = data.map( res => res.user.name);
    let location = data.map((res) => res.user.location);
    let uid = data.map((res) => res.user.id);
    let uid_str = data.map((res) => res.user.include_rts);
    console.log('id: ',uid);
    console.log(""); 
    console.log('nombre: ',names);
     console.log('');
     console.log('lugar: ',location);
};

//var stream = T.stream("statuses/filter", { track: "rucula pasarela" });

/* stream.on("tweet", function (tweet) {
  console.log(tweet);
}); */



/* T.get(
  "statuses/retweets/1314376329094139904",
 
  getTimeline
);  */

//T.get('search/tweets',params , gotData);
//T.get("statuses/user_timeline", params3, getTimeline);
//T.post('statuses/update', params2, tweeted)
//T.get("statuses/retweeters/ids", { id: "343360866131001345" }, getTimeline);
