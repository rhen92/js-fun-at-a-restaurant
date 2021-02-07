class Chef {
  constructor(name, restaurant, foodItem) {
    this.name = name;
    this.restaurant = restaurant;
    this.morning = true;
    this.menu = foodItem;
  }
  greetCustomer(customerName, value) {
    if(!value) {
      return `Hello, ${customerName}!`;
    }
    else if(value) {
      return `Good morning, ${customerName}!`;
  }
  }
  checkForFood(foodItem) {
    if(foodItem) {
      return `Yes, we're serving Cinnamon Rolls today!`;
  }
}
}
module.exports = Chef;
