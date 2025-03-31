// ✅ Task 1: Create a Customer Class
class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.purchaseHistory = [];
  }

  // Adds a purchase to the customer's history
  addPurchase(amount) {
    this.purchaseHistory.push(amount);
  }

  // Returns the total amount spent
  getTotalSpent() {
    return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
  }

  // Returns customer details
  getDetails() {
    return `Customer Name: ${this.name}, Email: ${this.email}, Total Spent: $${this.getTotalSpent().toFixed(2)}`;
  }
}

// Create customers and add purchases
const customer1 = new Customer("Heidy Tran", "heidytr229@gmail.com");
const customer2 = new Customer("Anna Nguyen", "xixirotrot@yahoo.com");
const customer3 = new Customer("Han Thao Hang", "hanhangg@gmail.com");

customer1.addPurchase(500);
customer1.addPurchase(420);
customer1.addPurchase(240);

customer2.addPurchase(180);
customer2.addPurchase(30);

customer3.addPurchase(500);
customer3.addPurchase(120);
customer3.addPurchase(520);

console.log(customer1.getDetails());
console.log(customer2.getDetails());
console.log(customer3.getDetails());

