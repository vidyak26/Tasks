// Displaying an object's properties on the console

var movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
  };
  
  console.log("Movie information for " + movie1.title);
  console.log("------------------------------");
  console.log("Actors: " + movie1.actors);
  console.log("Directors: " + movie1.directors);
  console.log("------------------------------");
  
  // Adding a second movie
  var movie2 = {
    title: "Inception",
    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
    directors: "Christopher Nolan"
  };
  
  console.log("Movie information for " + movie2.title);
  console.log("------------------------------");
  console.log("Actors: " + movie2.actors);
  console.log("Directors: " + movie2.directors);
  console.log("------------------------------");

  

  // Object for a blog post
var blogPost = {
    title: "My Adventure in the Amazon Rainforest",
    author: "Explorer123",
    date: "2024-07-17",
    content: "Today, I ventured deep into the heart of the Amazon Rainforest...",
    comments: [
      { user: "NatureLover56", comment: "Amazing adventure! I wish I could go there too." },
      { user: "TravelBug82", comment: "Great read! Looking forward to more adventures." }
    ]
  };
  
  // Displaying blog post information
  console.log("Blog Post: " + blogPost.title);
  console.log("Author: " + blogPost.author);
  console.log("Date: " + blogPost.date);
  console.log("------------------------------");
  console.log("Content: " + blogPost.content);
  console.log("------------------------------");
  console.log("Comments:");
  blogPost.comments.forEach(function(comment) {
    console.log(comment.user + ": " + comment.comment);
  });
  console.log("------------------------------");
  