var TWITTER_CONSUMER_KEY="lLL4FHYqblZbAFa2oVsHSOuMV";
var TWITTER_CONSUMER_SECRET="8NR3rBl86rpuwUl5ZWTArjiDv3BX8xhROBBC8kteV3ZHfjnOZD";
var TWITTER_ACCESS_TOKEN_KEY=	"1021495239020691456-8nKgPWUdR5vN75yb1RVLgZmfeH74fE";
var TWITTER_ACCESS_TOKEN_SECRET=	"JU2cbZnMDAJxAh0c9CpxOLu6l2gYlGXdb35mBjGaWyj4R";

var SPOTIFY_ID="22d465fcd34f4c7e9e73c053b325b6ea"
var SPOTIFY_SECRET="dca4bbde064e433389a7e59e8bebc984"

console.log('this is loaded');

exports.twitter = {
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

