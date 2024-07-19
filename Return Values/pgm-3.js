// Function to greet a person by name using a template
var getHelloTo = function (name) {
    var template = "Hello to {{name}}";
    template = template.replace("{{name}}", name);
    return template;
};

// Testing the function with different names
console.log(getHelloTo("Kandra")); // Output: Hello to Kandra
console.log(getHelloTo("Dax"));    // Output: Hello to Dax
