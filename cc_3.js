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

//Task 3- Employee Performance Tracking Scenario: 
let employee = {
    name: 'Heather Mack',
    role: 'Project Manager',
    performanceScore: 8.5,
    isActive: true}; // Declared Employee Properties 
employee.performanceScore = 9; // Updated performanceScore 
employee.promotionEligible = true; // Added new property 
console.log('Updated Employee Info:',employee); // Console.log updated employee info

//Task 4- Customer Feedback Records Scenario:
let feedback = [{
    customerName: 'Tamako Gomez',
    feedbackText: "Wasn't that great",
    rating: 1.5},
    {customerName: 'Mila Do',
    feedbackText: 'Amazing',
    rating: 10},
    {customerName: 'Mateo Martin',
    feedbackText: 'Horrible',
    rating: 3}]; // Declared Feedback Array 
feedback.push({customerName: 'Jane Jones', 
    feedbackText: 'Very Mid',
    rating: 5}); //Added New Feedback Object 
console.log(feedback);

//Task 5- Inventory Management System Scenario:
let inventory = {
    itemName: 'Iron',
    stockCount: 879,
    price: 27.99,
calculateTotalValue: function(){return this.stockCount * this.price;}}; //Calculates the returns total revenue 
console.log(inventory.calculateTotalValue()); // Output the total value 