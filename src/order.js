var deliveryOrders = [];
function takeOrder(order, deliveryOrders) {
    if(deliveryOrders.length < 3) {
      return deliveryOrders.length, deliveryOrders.push(order);
    }
  }

function refundOrder(numRefund,deliveryOrders) {
  return deliveryOrders.splice(numRefund - 1,1);
}

function listItems(deliveryOrders) {
  return `${deliveryOrders[0].item}, ${deliveryOrders[1].item}, ${deliveryOrders[2].item}`;
}

function searchOrder(deliveryOrders, menuItem) {
  if(`${deliveryOrders[0].item}` === menuItem) {
    return true;
  } else if(`${deliveryOrders[1].item}` === menuItem){
    return true;
  } else {
    return false;
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
