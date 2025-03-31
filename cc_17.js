// ✅ Task 1: Create a Customer Class
class Customer { // Creates a class that logs customer details
  constructor(name, email) {  //Uses name, email, and tracks purchase history
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

// Adding a purchase to purchase history for customer 1
customer1.addPurchase(500);
customer1.addPurchase(420);
customer1.addPurchase(240);

// Adding a purchase to purchase history for customer 2
customer2.addPurchase(180);
customer2.addPurchase(30);

// Adding a purchase to purchase history for customer 3
customer3.addPurchase(500);
customer3.addPurchase(120);
customer3.addPurchase(520);

// Logging the customer details to the console
console.log(customer1.getDetails());
console.log(customer2.getDetails());
console.log(customer3.getDetails());


// ✅ Task 2: Create a SalesRep Class
class SalesRep { // Creates a class that will make a client list
  constructor(name) {
    this.name = name;
    this.clients = [];
  }

  // Adds a customer to the sales rep's list
  addClient(customer) {
    this.clients.push(customer);
  }

  // Returns total spent by a specific client
  getClientTotal(name) {
    const client = this.clients.find(customer => customer.name === name);
    return client
      ? `${client.name} has spent $${client.getTotalSpent().toFixed(2)}`
      : `Client not found.`;
  }

  // Returns sales rep details
  getDetails() {
    const totalClientSpent = this.clients.reduce((total, client) => total + client.getTotalSpent(), 0);
    return `Sales Rep Name: ${this.name}, Total Clients Spent: $${totalClientSpent.toFixed(2)}`;
  }
}

// Create sales rep and add clients
const salesRep = new SalesRep("Sarah Nguyen");
salesRep.addClient(customer1);
salesRep.addClient(customer2);
salesRep.addClient(customer3);

// Logging the Sales Rep Details to the console
console.log(salesRep.getDetails());
console.log(salesRep.getClientTotal("Han Thao Hang"));

// ✅ Task 3: Create a VIPCustomer Class
class VIPCustomer extends Customer { // Creates a vip customer class that extends properties from the customer class
  constructor(name, email, vipLevel) { // Takes customer class features and adds vip level that can only be gold or platinum
    super(name, email);
    this.vipLevel = vipLevel;
  }

  // Override total spent to include 10% bonus
  getTotalSpent() {
    const baseTotal = super.getTotalSpent();
    return baseTotal + (baseTotal * 0.1);
  }

  // Override details to include VIP info
  getDetails() {
    return `VIP Customer Name: ${this.name}, Email: ${this.email}, VIP Level: ${this.vipLevel}, Total Spent (with bonus): $${this.getTotalSpent().toFixed(2)}`;
  }
}

// Create VIP customers and add purchases
const VIPCustomer1 = new VIPCustomer("Rachel Nguyen", "rachelnyu@gmail.com", "Platinum");
const VIPCustomer2 = new VIPCustomer("Quin Khanh", "imquinn@gmail.com", "Gold");

// Adding a purchase to purchase history for VIP customer 1
VIPCustomer1.addPurchase(4000);
VIPCustomer1.addPurchase(200);

// Adding a purchase to purchase history for VIP customer 2
VIPCustomer2.addPurchase(3500);
VIPCustomer2.addPurchase(2900);

//Logging the VIP customer 1 details to the console
console.log(VIPCustomer1.getDetails());
console.log(VIPCustomer2.getDetails());

//Adding  Vip Customers to the Sales Rep
salesRep.addClient(VIPCustomer1);
salesRep.addClient(VIPCustomer2);

