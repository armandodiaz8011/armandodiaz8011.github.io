
var Spotify = require("node-spotify-api");
var request = require('request');
var fs = require('fs');
var keys = require("./keys.js");
var inputCommand = process.argv[2];
var commandParam = process.argv[3];
var defaultSong = "99 Problems";
var axios = require('axios');



// Import the API keys
var keys = require("./keys");
var omdbKey = keys.omdbKey;

var spotify = new Spotify({
    id: '5975057cd93943409a94a6d4b03979f7',
    secret: 'efc9fe511c4e4373aecd5ef8ca943b6c',

//var omdb = new ombd({
//  id: '6608b9d7'
//})
//    

})
    


//This function processes the input commands
function processCommands(command, commandParam){


	switch(command){

	case 'spotify-this-song':
		if(commandParam === undefined){
            commandParam = defaultSong;
		}     
        console.log('spotifythissong')
        spotifyThis(commandParam); break;

        case 'ombd-this-movie':     
        console.log('ombdthismovie')
        ombdThis(commandParam); break;
}
}


    function spotifyThis(commandParam){
        console.log('spotifythis');
        spotify.search({
            type:'track',
            query:commandParam
        },
        function(error, data){
            if (error){
                console.log('error',error);
                return;
            }
        console.log('data',data)    
        }
        )

    } 

processCommands(inputCommand, commandParam);


function ombdThis(movie){

	//If user has not specified a movie , default to "Guardians of the Galaxy Vol. 2" 
	if(movie === ""){
        movie = "Guardians of the Galaxy Vol. 2";
	}
    var querystr="http://www.omdbapi.com/?t="+movie+"&apikey=6608b9d7"; 
    axios.get(querystr).then(
        function(response){
            console.log(response.data)
            console.log(response.data.year)
            console.log(response.data.rating);

        //var movieData = JSON.parse(response.data);
            //console.log(movieData)
            //console.log(movieData.year)
            //console.log(movieData.rating)
            //console.log(movieData.runtime);

        }
    )

    }

	// omdb.search({query: movie}, function(err, data) {
    // if (err) {
    //     console.log('Error occurred: ' + err);
    //     return;
    // }
    // console.log(data);
    // var movie = data.tracks.items[0];
    // console.log("------Movies-----");
    // for(i=0; i<movie.artists.length; i++){
    //     console.log(movies[i].name);
    // }

    //console.log("------Movie Name-----");
    //console.log(movie.name);

	//console.log("-------Preview Link-----");
    //console.log(movie.preview_url);

	//});

//}

//}
//processCommands(inputCommand, commandParam)


///