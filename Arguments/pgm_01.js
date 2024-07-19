message = "Hello, world!";
showMessage(); // This will now print "Hello, world!" to the console.
showMessage = function () {
    console.log(msg); // Change to 'msg' instead of 'message'
  };
  
  showMessage(); // This will cause an error since 'msg' is not defined.
  