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

**Test:** "It should return a Pizza object with four properties for Toppings, Size, Sauce, and Crust"
* Code: _const myPizza = new Pizza(["canadian bacon", "pineapple", "pepperoncini"], "medium", "garlic parmesan", "stuffed");_
* _Expected Output:_ Pizza { toppings: ["canadian bacon", "pineapple", "pepperoncini"], size: "medium", sauce: "garlic parmesan", crust: "stuffed" }

---

### Describe: _Pizza.prototype.pricing()_

**Test:** "It should return a price number calculated from the properties of the pizza it's called on"
* Code: _myPizza.pricing();_
* _Expected Output:_ 12.5
