function nameMenuItem(name) {
  return `Delicious ${name}`;
}
var menuName = nameMenuItem();

function createMenuItem(menuName, menuPrice, menuType) {
  return menuItem = {name:[menuName],
  price: `${menuPrice}`,
  type: `${menuType}`,};
}
var ingredients = [];

function addIngredients(newIngredients, ingredients) {
  for(var i = 0; i < ingredients.length; i++) {
    if(ingredients[i] === newIngredients) {
  return ingredients;
}
}
  ingredients.push(newIngredients);
  return ingredients.length, ingredients;
}
var newMenuItem = createMenuItem();
var initialPrice = [newMenuItem.price];

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

function decreasePrice(initialPrice) {
  var changePrice = initialPrice * .10;
  return initialPrice - changePrice;
}
var menuItemType = [newMenuItem.type];
function createRecipe(menuName, ingredients, menuItemType) {
  return recipe = {
    title: menuName,
    ingredients: ingredients,
    type: menuItemType,
  };
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
