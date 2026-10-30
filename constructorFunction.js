// function Employee(name, role, salary) {
//   this.name = name;
//   this.role = role;
//   this.salary = salary;
// }

// const employee1 = new Employee("Ali", "Frontend Developer", "80,000");
// const employee2 = new Employee("Ahmed", "Backend Developer", "100,000");
// const employee3 = new Employee("Saad", "UI/UX Designer", "75,000");

// console.log(employee1);
// console.log(employee2);
// console.log(employee3);

function Freelancer(name, hourlyRate, completedProjects) {
  this.name = name;
  this.hourlyRate = hourlyRate;
  this.completedProjects = completedProjects;
}

const freelancer1 = new Freelancer("Ghous", 25, 12);
const freelancer2 = new Freelancer("Hamza", 15, 8);
const freelancer3 = new Freelancer("Saif", 35, 20);

freelancer3.completedProjects = 10;

console.log(freelancer1);
console.log(freelancer2);
console.log(freelancer3);

function Product(name, price, stock, category) {
  if (typeof price !== "number" || Number.isNaN(price) || price < 0) {
    throw new Error(`Invalid price for "${name}": ${price}`);
  }
  if (!Number.isInteger(stock) || stock < 0) {
    throw new Error(`Invalid stock for "${name}": ${stock}`);
  }
  this.name = name;
  this.price = price;
  this.stock = stock;
  this.category = category;
}

const product1 = new Product("Keyboard", 500, 15, "Accessories");
const product2 = new Product("Monitor", 4500, 5, "Displays");
const product3 = new Product("Mouse", 2000, 30, "Accessories");
const product4 = new Product("Headphones", 10000, 20, "Audio");

console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Toyota", "Corolla", 2026);
const car2 = Car("Lexus", "LX 600", 2026);

console.log(car1);
console.log(car2); //this will give undefined

// function BankAccount(accountHolder, balance){
//   this.accountHolder = accountHolder;
//   this.balance = balance
// }

// const account1 = new BankAccount("Ghulam Ghous" , 100000);
// const account2 = new BankAccount("Saif", 10000);
// account1.balance = 400000
// console.log(account1)
// console.log(account2)

// 1. No explicit return
function LaptopA(brand, ram, price) {
  this.brand = brand;
  this.ram = ram;
  this.price = price;
}

// 2. Returns a primitive
function LaptopB(brand, ram, price) {
  this.brand = brand;
  this.ram = ram;
  this.price = price;
  return "I am a string";
}

function LaptopC(brand, ram, price) {
  this.brand = brand;
  this.ram = ram;
  this.price = price;
  return { message: "I am a different object", brand: "Override" };
}

const a = new LaptopA("Dell", 16, 900);
const b = new LaptopB("HP", 8, 600);
const c = new LaptopC("Lenovo", 32, 1200);

console.log(a); // LaptopA { brand: 'Dell', ram: 16, price: 900 }
console.log(b); // LaptopB { brand: 'HP', ram: 8, price: 600 }
console.log(c); // { message: 'I am a different object', brand: 'Override' }

function Student(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;
}

Student.prototype.introduce = function () {
  console.log(
    `Hi, I'm ${this.name}, ${this.age} years old, studying ${this.course}.`,
  );
};

const student1 = new Student("Saif", 24, "DSA");
const student2 = new Student("Nauman", 24, "OOP");
const student3 = new Student("Dayyan", 23, "Operating Systems");

student1.introduce();
student2.introduce();
student3.introduce();

console.log(student1.hasOwnProperty("introduce")); // false (lives on the prototype)
console.log(student1.hasOwnProperty("name")); // true  (set directly on the object)
console.log(Student.prototype.hasOwnProperty("introduce")); // true

function BankAccount(accountHolder, balance) {
  this.accountHolder = accountHolder;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount < this.balance) {
    this.balance -= amount;
  } else {
    console.log("Insufficient Funds");
  }
};

BankAccount.prototype.checkBalance = function () {
  console.log(`${this.accountHolder} account balance is ${this.balance}`);
};

const acc1 = new BankAccount("Ghulam", 25000);
const acc2 = new BankAccount("Saif", 2000);

acc1.deposit(9000);

acc2.withdraw(1000);

acc1.checkBalance();
acc2.checkBalance();

console.log(acc1.deposit === acc2.deposit);

console.log(acc1.hasOwnProperty("deposit"));

function Employee(name, department, salary, performanceScore) {
  this.name = name;
  this.department = department;
  this.salary = salary;
  this.performanceScore = performanceScore;
}

Employee.prototype.giveRaise = function (percentage) {
  if (percentage > 0) {
    this.salary += (this.salary * percentage) / 100;
  } else {
    console.log("Invalid raise percentage");
  }
};

Employee.prototype.updatePerformance = function (newScore) {
  if (newScore > 0 && newScore <= 100) {
    this.performanceScore = newScore;
  } else {
    console.log("Invalid Performance Score")
  }
};

Employee.prototype.getDetails = function () {
  console.log(
    `Employee Name is  ${this.name} works in the ${this.department} department, his current salary is ${this.salary} and his performance score is ${this.performanceScore}`,
  );
};

const emp1 = new Employee("Bilal", "Development", 250000, 89);
const emp2 = new Employee("Saif", "HR", 100000, 79);
const emp3 = new Employee("Ghulam", "Management", 500000, 90);


emp3.giveRaise(50)
emp2.updatePerformance(50);
emp1.getDetails()

console.log(emp1.hasOwnProperty("getDetails"));


console.log(emp1)
console.log(emp2)
console.log(emp3)