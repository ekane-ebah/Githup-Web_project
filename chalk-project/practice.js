function candyOrderQuantity(inventory, candyType) {
  for (let i = 0; i < inventory.length; i++)    if (inventory[i].candy === candyType) {
      if (inventory[i].inStock > inventory[i].weeklyAverage) {
        return 0;
      } else if (inventory[i].inStock < inventory[i].weeklyAverage) {
        return inventory[i].weeklyAverage * 2;
      }
  }
  return 0;
  }
  
 

function allCandyOrders(inventory){
  //for( let i = 0; i < inventory.length; i++){
    let amountToOrder = candyOrderQuantity()
    let candy= inventory[i].candy
    let orderObject = {
      candy:"", amountToOrder:""
    
  }
  let result = orderObject.push(amountToOrder);
  return results
}