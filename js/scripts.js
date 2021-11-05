function PizzaOrder() {
  this.pizzas = {};
  this.currentId = 0;
  this.totalPrice = 0;
}

PizzaOrder.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
  this.totalPrice += pizza.price;
};

PizzaOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

PizzaOrder.prototype.findPizza = function(id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
};

PizzaOrder.prototype.removePizza = function(id) {
  if (this.pizzas[id] === undefined) {
    return false;
  }
  this.totalPrice -= this.pizzas[id].price;
  delete this.pizzas[id];
  return true;
};

function Pizza(toppings, size, sauce, crust) {
  this.toppings = toppings;
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
}

Pizza.prototype.pricing = function() {
  let price = 0;
  switch (this.size) {
    case ("Small"):
      price = 8;
      break;
    case ("Medium"):
      price = 9.5;
      break;
    case ("Large"):
      price = 11;
      break;
    case ("Extra Large"):
      price = 13;
      break;
    case ("Skoolie-Sized"):
      price = 45;
      break;
  }
  switch (this.crust) {
    case ("Stuffed"):
      price += 1;
      break;
    case ("Thin"):
      price += .5;
      break;
    case ("Pan"):
      price += 1.5;
      break;
    case ("Calzone"):
      price += 2;
      break;
    case ("Deep Dish"):
      price += 3;
      break;
    case ("Deeper Dish"):
      price += 9;
      break;
    case ("Deepest Dish"):
      price += 30;
      break;
    case ("Cookie"):
      price += 1;
      break;
    case ("Jerky"):
      price += 1;
      break;
  }
  price += .75 * this.toppings.length;
  this.price = price;
};

let myOrder = new PizzaOrder();

function displayMyPizzas(orderToDisplay) {
  let pizzaList = $("ul#my-pizzas");
  let htmlForPizzaInfo = "";
  Object.keys(orderToDisplay.pizzas).forEach(function(key) {
    const pizza = orderToDisplay.findPizza(key);
    htmlForPizzaInfo += "<li id=" + pizza.id + ">My " + pizza.size + " " + pizza.crust + " pizza with " + pizza.toppings.length + " toppings!</li>";
  });
  pizzaList.html(htmlForPizzaInfo);
  $("#total-price").text(orderToDisplay.totalPrice.toFixed(2));
}

function showPizza(pizzaId) {
  const myPizza = myOrder.findPizza(pizzaId);
  $("#my-toppings").empty();
  $("#my-output").slideDown();
  $("#my-size").text(myPizza.size);
  $("#my-crust").text(myPizza.crust);
  $("#my-sauce").text(myPizza.sauce);
  myPizza.toppings.forEach(function(topping) {
    $("#my-toppings").append("<li class='fancy'>" + topping + "</li>");
  });
  $("#my-price").text(myPizza.price.toFixed(2));
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton btn btn-danger' id=" + myPizza.id + ">Remove from order</button>");
}

function attachPizzaListeners() {
  $("ul#my-pizzas").on("click", "li", function () {
    showPizza(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    myOrder.removePizza(this.id);
    $("#my-output").hide();
    displayMyPizzas(myOrder);
  });
}

$(document).ready(function() {
  attachPizzaListeners();
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    const mySize = $("#pizza-size").val();
    const myStyle = $("#pizza-crust").val();
    const mySauce = $('.sauces input[name="pizza-sauce"]:checked').val();
    const myToppings = [];
    $('.toppings input[name="pizza-toppings"]:checked').each(function() {
      myToppings.push($(this).val());
    });

    let myPizza = new Pizza(myToppings, mySize, mySauce, myStyle);
    myPizza.pricing();

    myOrder.addPizza(myPizza);
    displayMyPizzas(myOrder);

    $("#pizza-size").val("Small");
    $("#pizza-crust").val("Regular");
    let presetSauce = "Robust Marinara";
    $("[name=pizza-sauce").filter("[value='" + presetSauce + "']").prop("checked", true);
    $("[name='pizza-toppings']").prop("checked", false);
  });
});