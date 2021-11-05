function Pizza(toppings, size, sauce, crust) {
  this.toppings = toppings;
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
}

Pizza.prototype.pricing = function() {
  let price = 0;
  switch (this.size) {
    case ("small"):
      price = 8;
      break;
    case ("medium"):
      price = 9.5;
      break;
    case ("large"):
      price = 11;
      break;
    case ("x-lrg"):
      price = 13;
      break;
  }
  switch (this.crust) {
    case ("stuffed"):
      price += 1;
      break;
    case ("thin"):
      price += .5;
      break;
    case ("pan"):
      price += 1.5;
      break;
    case ("calzone"):
      price += 2;
      break;
  }
  price += .75 * this.toppings.length;
  this.price = price;
};