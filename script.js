/*class name {
    constructor(parameters) {
        
    }
}
// Boilerplate code for a simple order calculation system
function calculateOrderTotal(items, discount, taxRate) {
    let total = 0;
    // Repeated code for summing items
    for (let i = 0; i < items.length; i++) {
        total = total + items[i];
    }
    // Apply discount
    total = total - (total * discount);
    // Apply tax
    total = total + (total * taxRate);
    // Log the result
    console.log("The total for your order is: " + total);
    return total;
}

// Duplicate code example for demonstration
function calculateBulkOrderTotal(items, discount, taxRate) {
    let total = 0;
    // Repeated code for summing items
    for (let i = 0; i < items.length; i++) {
        total = total + items[i];
    }
    // Apply discount
    total = total - (total * discount);
    // Apply tax
    total = total + (total * taxRate);
    // Log the result
    console.log("The total for your order is: " + total);
    return total;
}

// Test the functions
const orderItems = [10, 20, 30, 40];
const discountRate = 0.1; // 10% discount
const tax = 0.08; // 8% tax
calculateOrderTotal(orderItems, discountRate, tax);
calculateBulkOrderTotal(orderItems, discountRate, tax);
*/

const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
}

const infixEval = (str, regex) => str.replace(regex, (_match, arg1, operator, arg2) => infixToFunction[operator](parseFloat(arg1), parseFloat(arg2)));

const highPrecedence = str => {
  const regex = /([\d.]+)([*\/])([\d.]+)/;
  const str2 = infixEval(str, regex);
  return str === str2 ? str : highPrecedence(str2);
}

const isEven = num => num % 2 === 0;
const sum = nums => nums.reduce((acc, el) => acc + el, 0);
const average = nums => sum(nums) / nums.length;

const median = nums => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length = sorted.length;
  const middle = length / 2 - 1;
  return isEven(length)
    ? average([sorted[middle], sorted[middle + 1]])
    : sorted[Math.ceil(middle)];
}
