# _{Application Name}_

#### By _**Matt C.**_

#### _{Brief description of application}_

## Technologies Used

* _HTML_
* _CSS_
* _Markdown_
* _JavaScript_
* _Bootstrap_
* _jQuery_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _Clone this repository to your local device_
* _Run index.html in your browser_
* _Enjoy the lovely CSS_

## Known Bugs

* _None so far_

## License - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems/bugs feel free to send me an email @mc.casperson@gmail.com with details._

Copyright (c) _2021_ _Matt C._

## **SPECS**

---

### Describe: _Pizza()_

**Test:** 
* Code: _ _
* _Expected Output:_ 

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
* Code: _myOrder.removePizza(1)_
* _Expected Output:_ true
