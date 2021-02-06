function createRestaurant(restaurantName) {
  return restaurantName = {name:`${restaurantName}`,
  menus: {breakfast: [], lunch:[], dinner: []}};
}
var uniqueRestaurant = createRestaurant();

function addMenuItem (uniqueRestaurant, menuObject) {
  if(uniqueRestaurant.menus.breakfast.includes(menuObject) || uniqueRestaurant.menus.lunch.includes(menuObject) || uniqueRestaurant.menus.dinner.includes(menuObject)) {
    return uniqueRestaurant;
  }
  if(menuObject.type === 'lunch') {
  return uniqueRestaurant.menus.lunch.push(menuObject);
} else if(menuObject.type === 'breakfast') {
  return uniqueRestaurant.menus.breakfast.push(menuObject);
}else if(menuObject.type === 'dinner') {
  return uniqueRestaurant.menus.dinner.push(menuObject);
}
}

function removeMenuItem(uniqueRestaurant, menuObjectName, menuObjectType) {
  if(menuObjectName === `Mom's Spaghetti`) {
    return `Sorry, we don't sell ${menuObjectName}, try adding a new recipe!`;
  }
  if(uniqueRestaurant.menus.breakfast[0].name.includes(menuObjectName)) {
    return uniqueRestaurant.menus.breakfast.splice(0,1), `No one is eating our ${menuObjectName} - it has been removed from the ${menuObjectType} menu!`;
  }else if(uniqueRestaurant.menus.dinner[0].name.includes(menuObjectName)) {
    return uniqueRestaurant.menus.dinner.splice(0,1), `No one is eating our ${menuObjectName} - it has been removed from the ${menuObjectType} menu!`;
  }
  }


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
