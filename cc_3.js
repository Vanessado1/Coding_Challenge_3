// Task 1- Price Management Scenario 
let price = [5, 12, 9, 20, 19]; //Declared Price Array
console.log('Original',price);
price.splice(0,1,26);//Removed 5 and added 26
console.log('Updated Price',price); // Updated Price Array

// Task 2- Modifying Customer Order Scenario:
let orders = [19, 3, 12, 6, 88]; //Declared Order Array
orders[3] += 5; // Adding 5 to the third order
console.log('Updated:',orders);
let totalOrders = orders.reduce((total, amount) => total + amount, 0); //Calulating the Total Orders
console.log(`Total Orders: $${totalOrders}`);