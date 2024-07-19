var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);
var cube = function (numberToCube) {
    var result;
    result = numberToCube * numberToCube * numberToCube;
    console.log(numberToCube + " ^ 3 = " + result);
  };
  
  // Test the cube function
  cube(3);
  cube(-1);
  cube(5);
  cube(0);
  var squareRoot = function (number) {
    var result = Math.sqrt(number);
    console.log("The square root of " + number + " is " + result);
  };
  
  // Test the squareRoot function
  squareRoot(9);
  squareRoot(16);
  squareRoot(25);
  squareRoot(2);
    