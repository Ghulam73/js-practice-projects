const customers = ["Alice", "Bob", "Charlie", "David"];

for (const customer of customers) {
    console.log(`Welcome ${customer}! Thank you for visiting our website.`);
}


const skills = ["JavaScript", "Python", "Java", "C++"];
let totalSkills = 0;
for (const skill of skills) {
    console.log(`${skill}.`);
    totalSkills++;

    if(skill === "JavaScript") {
        console.log("JavaScript is a versatile programming language.");
    }
}
console.log(`Total skills: ${totalSkills}`);


const orders = [2500, 4500, 1200, 8000, 3500, 10000];

let totalRevenue = 0;
let largeOrders = 0;
let smallOrders = 0;
let largeOrdersRevenue = 0;

for (const order of orders) {
    totalRevenue += order;

    if (order > 5000) {
        largeOrders++;
        largeOrdersRevenue += order;
    } else {
        smallOrders++;
    }
}

//console.log(`Total Orders: ${orders.length}`);
//console.log(`Total Revenue: ${totalRevenue}`);
//console.log(`Orders Above 5000: ${largeOrders}`);
//console.log(`Orders 5000 or Below: ${smallOrders}`);
//console.log(`Revenue From Large Orders: ${largeOrdersRevenue}`);


const user = {
    name: "Ghulam Ghous",
    age: 25,
    profession: "Full Stack Developer",
    country: "Pakistan"
};

for (const [key, value] in user) {
    //console.log(`${key}: ${value}`);
}


const inventory = {
    laptops: 12,
    phones: 25,
    tablets: 8,
    headphones: 30,
    keyboards: 15
};

let totalProducts = 0;
let productsGreaterThan15 = 0;
for(const product in inventory){
    const quantity = inventory[product];
    console.log(`${product}: ${quantity}`);
    totalProducts += quantity;
    if(quantity > 15){
        productsGreaterThan15++;
    }
}
console.log(`Total Products: ${totalProducts}`);
console.log(`Products with Quantity > 15: ${productsGreaterThan15}`);


const marks = {
    Ali: 85,
    Ahmed: 62,
    Hamza: 91,
    Usman: 48,
    Bilal: 76
};


let totalMarks = 0;
let averageMarks = 0;
let studentsAbove70 = 0;
let studentsBelow70 = 0;
let highestMarks = 0;

for(const student in marks){
    const mark = marks[student];
    totalMarks += mark;
    if(mark >= 70){
        studentsAbove70++;
    } else {
        studentsBelow70++;
    }
    if(mark > highestMarks){
        highestMarks = mark;
    }
}
averageMarks = totalMarks / Object.keys(marks).length;


console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${averageMarks}`);
console.log(`Students with Marks > 70: ${studentsAbove70}`);
console.log(`Students with Marks <= 70: ${studentsBelow70}`);
console.log(`The Highest Marks: ${highestMarks}`);



const cart = [1200, 2500, 800, 4500, 1500];
let totalCartValue = 0;
let costmoreThan2000 = 0;
cart.forEach((item) => {
    console.log(`Item Price: $${item}`);
    totalCartValue += item;
    if(item > 2000) {
        costmoreThan2000++;
    }
});
console.log(`Total Cart Value: $${totalCartValue}`);
console.log(`Items Costing More Than $2000: ${costmoreThan2000}`);

const salaries = [45000, 75000, 55000, 90000, 40000, 65000];
let totalSalaries = 0;
let averageSalary = 0;
let salariesAbove60000 = 0;
salaries.forEach((salary) => {
    totalSalaries += salary;
});
averageSalary = totalSalaries / salaries.length;

salaries.forEach((salary) => {
    console.log(`Salary: $${salary}`);
    if(salary >= 60000) {
        salariesAbove60000++;
    }
});
console.log(`Total Salaries: $${totalSalaries}`);
console.log(`Average Salary: $${averageSalary}`);
console.log(`Salaries Above $60,000: ${salariesAbove60000}`);


const orders1 = [
    { id: 101, amount: 2500, status: "completed" },
    { id: 102, amount: 7000, status: "completed" },
    { id: 103, amount: 1500, status: "cancelled" },
    { id: 104, amount: 9000, status: "completed" },
    { id: 105, amount: 3000, status: "pending" },
    { id: 106, amount: 6000, status: "completed" }
];

let completedOrdersCount = 0;
let totalCompletedOrdersAmount = 0;
let cancelledOrdersCount = 0;
let pendingOrdersCount = 0;
let highestOrderAmount = 0;

orders.forEach((order) => {
    if(order.status === "completed") {
        completedOrdersCount++;
        totalCompletedOrdersAmount += order.amount;
    }
    if(order.status === "cancelled") {
        cancelledOrdersCount++;
    }
    if(order.status === "pending") {
        pendingOrdersCount++;
    }
    if(order.amount > highestOrderAmount) {
        highestOrderAmount = order.amount;
    }
});
console.log(`Completed Orders: ${completedOrdersCount}`);
console.log(`Total Amount from Completed Orders: $${totalCompletedOrdersAmount}`);
console.log(`Cancelled Orders: ${cancelledOrdersCount}`);
console.log(`Pending Orders: ${pendingOrdersCount}`);
console.log(`Highest Order Amount: $${highestOrderAmount}`);
