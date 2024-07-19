// Defining the showMovieInfo function
var movie1;
var showMovieInfo;
var movie;

// Movie object 1
movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

// Function to display movie information
showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

// Assigning movie1 to the movie variable
movie = movie1;

// Calling showMovieInfo will display information for movie1
showMovieInfo();

// Further Adventures

// 1) Assign movie2 to the movie variable instead of movie1
// movie2 = { title: "Spectre", actors: "Daniel Craig, Christoph Waltz", directors: "Sam Mendes" };
// movie = movie2;
// Now calling showMovieInfo will display information for movie2 if movie2 is defined.

// 2) Assign an empty object to movie2 and then assign it to the movie variable
// var movie2 = {};
// movie = movie2;
// Now calling showMovieInfo will display undefined for title, actors, and directors.

// 3) Fill out movie2 with the necessary properties and then assign it to the movie variable
// var movie2 = { title: "The Dark Knight", actors: "Christian Bale, Heath Ledger", directors: "Christopher Nolan" };
// movie = movie2;
// Now calling showMovieInfo will display information for movie2.

