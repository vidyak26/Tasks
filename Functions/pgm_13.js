// Define a function that handles both tax calculation and sale display
var processSale = function(sale) {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;
    
    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("total cost = $" + sale.total);
  };
  
  // Define each sale object
  var sale1 = { price: 140, taxRate: 15 };
  var sale2 = { price: 40, taxRate: 10 };
  var sale3 = { price: 120, taxRate: 20 };
  
  // Process each sale using the unified function
  processSale(sale1);
  processSale(sale2);
  processSale(sale3);
  