function layoutDiscountPrice(quantity) {
  const first100price = 100;
  const second100price = 90;
  const above200price = 70;

  if (quantity <= 100) {
    const total = quantity * first100price;
    return total;
  } 
  else if (quantity <= 200) {
    const first100total = 100 * first100price;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * second100price;
    const total = first100total + remainingTotal
    return total;
  } 
  else {
    const first100total = 100 * first100price;
    const second100total = 100 * second100price;
    const remainingQuantity = quantity - 200;
    const remainingTotal = remainingQuantity * above200price;
    const total = first100total + second100total + remainingTotal;
    return total;
  }
}

const total = layoutDiscountPrice(201);
console.log(total);
