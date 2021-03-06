# _Chef Epicodi's Pizza Parlor_

#### By _**Matt C.**_

#### _Mock website to add/remove pizzas from an order_

## Technologies Used

* _HTML_
* _CSS_
* _Markdown_
* _JavaScript_
* _Bootstrap_
* _jQuery_

## Description

_Uses objects to store pizzas you create and add to your order, which you can then view or remove from the order._

## Setup/Installation Requirements

* _Clone this repository to your local device_
* _Run index.html in your browser_
* _Enjoy the lovely CSS_
* _Or experience the site live on github pages right [here](https://catperso.github.io/pizza-parlor)!_

## Known Bugs

* _Cannot actually order the pizzas yet._

## License - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems/bugs feel free to send me an email @mc.casperson@gmail.com with details._

Copyright (c) _2021_ _Matt C._

## **SPECS**

---

### Describe: _Pizza()_

**Test:** "It should return a Pizza object with four properties for Toppings, Size, Sauce, and Crust."
* Code: _const myPizza = new Pizza(["canadian bacon", "pineapple", "pepperoncini"], "medium", "garlic parmesan", "stuffed");_
* _Expected Output:_ Pizza { toppings: ["canadian bacon", "pineapple", "pepperoncini"], size: "medium", sauce: "garlic parmesan", crust: "stuffed" }

---

### Describe: _Pizza.prototype.pricing()_

**Test:** "It should set a price property for the pizza its called on based on the other properties."
* Code: _myPizza.pricing();_
* _Expected Output:_ Pizza { toppings: ["canadian bacon", "pineapple", "pepperoncini"], size: "medium", sauce: "garlic parmesan", crust: "stuffed", price: 12.75 }

---

### Describe: _PizzaOrder()_

**Test:** "It should return a PizzaOrder object with a property to store pizzas and an ID to assign pizzas it stores."
* Code: _const myOrder = new PizzaOrder();_
* _Expected Output:_ PizzaOrder { Pizzas: {}, currentId: 0 }

---

### Describe: _PizzaOrder.prototype.addPizza(pizza)_

**Test:** "It should assign an ID to a pizza and add it to the order."
* Code: _myOrder.addPizza(myPizza);_
* _Expected Output:_ PizzaOrder { Pizzas: {1: myPizza}, currentId: 1 }

**Test:** "It should add the price of the pizza to the total price of the order."
* Code: _myOrder.addPizza(myPizza);_
* _Expected Output:_ PizzaOrder { Pizzas: {1: myPizza}, currentId: 1, totalPrice: 12.75 }

---

### Describe: _PizzaOrder.prototype.assignId()_

**Test:** "It should increment the order's currentId by 1 then return the currentId."
* Code: _myOrder.assignId();_
* _Expected Output:_ 2

---

### Describe: _PizzaOrder.prototype.findPizza(id)_

**Test:** "It should take an ID number and return any pizza that matches that ID in the order."
* Code: _myOrder.findPizza(1);_
* _Expected Output:_ Pizza { toppings: ["canadian bacon", "pineapple", "pepperoncini"], size: "medium", sauce: "garlic parmesan", crust: "stuffed", id: 1 }

---

### Describe: _PizzaOrder.prototype.removePizza(id)_

**Test:** "It should take an ID number, remove any pizza matching that ID from the order, and return true if it does."
* Code: _myOrder.removePizza(1);_
* _Expected Output:_ true

**Test:** "It should remove the price of the removed pizza from the total price of the order."
* Code: _myOrder.removePizza(1);_
* _Expected Output:_ PizzaOrder { Pizzas: {}, currentId: 1, totalPrice: 0 }