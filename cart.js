const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];


  
function calculateTotal(cart) {
  let sum = cart.reduce((sum,item) => sum + item.price, 0);// removed .fliter() error within the console. Reduce() is a method thatI could use an acc to sum the prices of each item.  removed the for loop and replaced it with fat arrow. 
  // for (let i = 0; i <  cart.length; i++) { // Bug: <= should be <
  //     total += cart[i].price[i]; // Bug: cartItems[i] is undefined on the last iteration
  return sum;
  }


function applyDiscount(total, discountRate){
    discountRate = total * 0.2; //set discount rate at 20% discount sum * 0.2
    return  sum - discountRate; //bug: Missing validation for discountRate the total should refelect final price after discount
}

function generateReceipt(cart, total) {
  let receipt = `Items:\n`;
  cart.forEach(item => {
      receipt += `\n${item.name}: $${item.price}\n`;
  });
  receipt += `\nSum: $${sum}\n`;
  receipt += `Total: $${total.toFixed()}`; // Bug: total may not be a number. Had to fix the calculateTotal and applyDiscount functions to produce the correct number to the output
  return receipt;
}
// generateReceipt();

// Debugging entry point
console.log("Starting shopping cart calculation...");
const sum = calculateTotal(cart);

const discountedTotal = applyDiscount(sum * 0.2); // 20% discount

const receipt = generateReceipt(cart, discountedTotal);

console.log(`Total: ${discountedTotal}`);
document.getElementById("receipt").textContent = receipt;

// module.exports = {calculateTotal, applyDiscount, generateReceipt};

