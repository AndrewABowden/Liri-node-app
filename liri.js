//Environment Variables0
require("dotenv").config();

var fs = require("fs");
var keys = require("./keys");
//Request
var request = require("request"); 
var fs = require("fs"); //access to file system
//Twitter
var Twitter = require("twitter");
var config = require('./config.js');
var latestTweets = require('latest-tweets');
//Spotify
var Spotify = require('node-spotify-api');

// var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var SpotifyShort = require("spotify-api");

//Initializes the keys so we can use API , id and client secret
var spotify = new Spotify(keys.spotify);
//Make bot accept these commands!
// * `my-tweets` twitter NPM package.-
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`v
//#####################Section for OMBD ###########################

//http://www.omdbapi.com/?i=tt3896198&apikey=ee2eb5bd


//##################### Global Process ########################### 
//node 0, liri 1, action 2
var action = process.argv[2]
var value = process.argv[3]

//##################### Twitter Bot Settings-latestTweets ###########################
//if action in command line is liri latest-tweets, run latestTweets and TwitterBot autoLiker
  if (process.argv[2] === 'my-tweets') {
var T = new Twitter(config);

//Latest Tweets ---- node liri my-tweets is the command
latestTweets('AndrewB14941778', function (err, tweets) {
  console.log(tweets)
})

//Twitter bot, favorites and searches most relevant topics based on search query topic!! 
//get requests return an array of multiple tweets via the data.statuses object.
var params = {
    q: '#javscript', //search "nodejs" in twitter
    count: 10, // 10 most recent tweets
    result_type: 'recent', //recent tweets most relevant
    lang: 'en'
}

// Initiate your search using the above paramaters, grabs favorites and likes them 
T.get('search/tweets', params, function(err, data, response) {
    // If there is no error, proceed
    if(!err){
      // Loop through the returned tweets
      for(let i = 0; i < data.statuses.length; i++){
        // Get the tweet Id from the returned data
        let id = { id: data.statuses[i].id_str }
        // Try to Favorite the selected Tweet
        T.post('favorites/create', id, function(err, response){
          // If the favorite fails, log the error message
          if(err){
            console.log(err[0].message);
          }
          // If the favorite is successful, log the url of the tweet
          else{
            let username = response.user.screen_name;
            let tweetId = response.id_str;
            console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
          }
        });
      }
    } else {
      console.log(err);
    }
  })


function txtLog() {
    fs.appendFile("log.txt", "blah blah" , function(err) {
        if (err) {
            return console.log(err);
        }
    })
}

txtLog();

  }
//##################### Spotify Code ###########################

if (process.argv[2] === 'spotify-this-song') {
 //Spotify Code

// var getArtistNames = function(artist) {
//   return artist.name;
// }

// var getMeSpotify = function(songName) {
//   if (songName === undefined) {
//     songName = "What's my age again";
//   }

//   spotify.search(
//     {
//       type: "track",
//       query: "queryname"
//     }
//   )


//}


var spotify = new Spotify({
  id: "22d465fcd34f4c7e9e73c053b325b6ea",
  secret: "dca4bbde064e433389a7e59e8bebc984"
});
 
//request
spotify.request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
//search
spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
    console.log(data); 
  }
});

}

//OBD

var getMeMovie = function(movieName) {
  if( movieName === undefined) {
    movieName = "Gladiator";
  }

  var urlHit = "http://ombdapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";



  request(urlHit, function(error, response, body) {
    console.log("Name" + jsonData.Title)
    console.log("Rating" + jsonData.Rating)
    console.log("Country" + jsonData.Country)
    console.log("Language" + jsonData.Language)
    console.log("Plot" + jsonData.Plot)
    console.log("Actors" + jsonData.Actors)
    console.log("Rotten Tomatoes Rating" + jsonData.Ratings[1].Value);

  });
}

// var pick = function(caseData, functionData) {
//   switch(caseData) {
//     case "my-tweets";
//     latestTweets();
//     break;
//     case "spotify-this-song";

//   }
// }

// var runThis = function(argOne, argTwo) {
//   pick(argOne, argTwo)
// // };

// runThis(process.argv[2],process.argv[3]);

// var logText = function() {
//   fs.readFile("random.txt", "utf8", function(err, response, data) {

//   }
// }
// var pick = function(caseData, functionData) {
//   switch(caseData) {
//     case "my-tweets";
//     latestTweets();
//     break;
//     case "spotify-this-song";

//   }
// }

// var runThis = function(argOne, argTwo) {
//   pick(argOne, argTwo)
// // };

// runThis(process.argv[2],process.argv[3]);

// var logText = function() {
//   fs.readFile("random.txt", "utf8", function(err, response, data) {

//   }
// }