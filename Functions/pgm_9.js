// Defining the showMovieInfo function
var showMovieInfo;

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

// Attempting to call showMovieInfo without assigning movie variable
// This will result in an error because movie is not defined yet.
// showMovieInfo();

// Declaring a movie variable without assigning it a value
var movie;
// Now calling showMovieInfo will result in "undefined" for movie properties
// showMovieInfo();

// Creating an empty object and assigning it to the movie variable
movie = {};
// Calling showMovieInfo will print undefined for title, actors, and directors
// showMovieInfo();

// Adding title, actors, and directors properties to the movie object
movie.title = "Inception";
movie.actors = "Leonardo DiCaprio, Joseph Gordon-Levitt";
movie.directors = "Christopher Nolan";

// Now calling showMovieInfo will display the movie information
showMovieInfo();
