var menu = {};

    menu.courses = {};

        menu.courses['appetizers'] = [];
        menu.courses['mains']  = [];
        menu.courses['desserts'] = [];


menu.addDishToCourse = function (courseName, dishName, dishPrice) {
    
    let dish = {courseName: courseName, name: dishName, price: dishPrice}
    // Object.hasOwn takes 2 parameters/returns only a boolean if Object has Property
    //First parameter is our Object
    //Second Parameter is our Property
        if (Object.hasOwn(menu.courses, courseName)) {
            menu.courses[courseName].push(dish);
        }

    };


menu.getRandomDishFromCourse = function (courseName) {

      let dishes = menu.courses[courseName];
      let dish = dishes[(Math.floor((Math.random () * dishes.length)))];
      
     return dish
  };
 

menu.generateRandomMeal = function () {

let appetizer = menu.getRandomDishFromCourse('appetizers');

let main = menu.getRandomDishFromCourse('mains');

let dessert = menu.getRandomDishFromCourse('desserts');

let totalPrice = ((1.0775 * (appetizer.price + main.price + dessert.price))).toFixed(2);
    //1.0775 = the total of all dishes after California sales Tax
    
    console.log(`For your appetizer, you'll have the ${appetizer.name}. For your main dish, you'll have the ${main.name}. You'll then end your meal with some delicious ${dessert.name}. Your total price comes out to $${totalPrice} tax included`);

let meal = appetizer.name + ' as the appetizer with ' + main.name + ' as the main dish and some ' + dessert.name;

    console.log(meal);

};


menu.addDishToCourse('appetizers', 'Tater Tots', 3.99);
menu.addDishToCourse('appetizers', 'Sweet Potato Fries', 2.99);
menu.addDishToCourse('appetizers', 'Fresh Calamari', 10.15);
menu.addDishToCourse('mains', '8 oz. Ribeye Steak', 18.95);
menu.addDishToCourse('mains', 'Grilled Chicken', 12.50);
menu.addDishToCourse('mains', 'BBQ Pork Ribs', 15.00);
menu.addDishToCourse('desserts', 'Cheese Cake', 4.99);
menu.addDishToCourse('desserts', 'Homemade Ice Cream', 2.85);
menu.addDishToCourse('desserts', 'Chocolate Chip Cookies', 1.50);
menu.addDishToCourse('desserts', 'Smores', 8.15);


