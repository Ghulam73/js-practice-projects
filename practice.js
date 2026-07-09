//Question#1
let name = "Ghulam Ghous";
let age = 24;
let profession = "Software Engineer";
let reason = "I want to become a software engineer because I have a passion for technology and problem-solving. I enjoy creating innovative solutions and contributing to the development of software applications that can make a positive impact on people's lives.";

console.log("Name: " + name);
console.log(typeof name);
console.log("Age: " + age);
console.log(typeof age);
console.log("Profession: " + profession);
console.log(typeof profession);
console.log("Reason: " + reason);
console.log(typeof reason);

//Question#2
const accountId = 1312
let accountEmail = "ghulam.ghous@example.com"
let password = "securepassword123"
let city = "Karachi"

accountEmail = "ghulam.ghous2002@gmail.com"
password = "1312ffCC@"
city = "Lahore"

console.log("Account ID: " + accountId);
console.log("Account Email: " + accountEmail);
console.log("Password: " + password);
console.log("City: " + city);

//Question#3
let phoneNumber;
phoneNumber = 1234567890;
console.log("Phone Number: " + phoneNumber);

//Question#4
const companyName = "Codexify Solutions"
let country = "United Kingdom"
let NumberOfEmployees = 500
let isHiring = true
let meeting = null

console.table([companyName, country, NumberOfEmployees, isHiring, meeting])
console.log(typeof meeting)

//Question#5
const productPrice = "2500";
const quantity = "3";
const deliveryCharge = "150";

console.table([productPrice, quantity, deliveryCharge])

let priceInNumber = Number(productPrice);
let quantityInNumber = Number(quantity);
let deliveryChargeInNumber = Number(deliveryCharge);

console.table([priceInNumber, quantityInNumber, deliveryChargeInNumber])

let subTotal = priceInNumber * quantityInNumber;
let totalPrice = subTotal + deliveryChargeInNumber;

console.log("Total Price: " + totalPrice);

//Question#6
const monthlySalary = "85000";
let salaryInNumber = Number(monthlySalary);
let bonus = 15000;
annualSalary = salaryInNumber * 12 + bonus;
console.log("Annual Salary: " + annualSalary);
let salaryInString = String(annualSalary);
console.log("Annual Salary in String: " + salaryInString);
console.log("Type of Annual Salary: " + typeof salaryInString);

//Question#7
const ageInput = "twenty five";
let ageInNumber = Number(ageInput);
console.log("Age Input: " + ageInput);
console.log("Age in Number: " + ageInNumber);
console.log("Type of Age Input: " + typeof ageInput);
console.log("Type of Age in Number: " + typeof ageInNumber);

//Question#8
const value1 = "JavaScript"; //My prediction => true
const value2 = ""; //My prediction => false
const value3 = 1; //My prediction => true
const value4 = 0; //My prediction => false
const value5 = "0"; //My prediction => true
const value6 = null; //My prediction => false
const value7 = undefined; //My prediction => false

const valueinBoolean1 = Boolean(value1);
const valueinBoolean2 = Boolean(value2);
const valueinBoolean3 = Boolean(value3);
const valueinBoolean4 = Boolean(value4);
const valueinBoolean5 = Boolean(value5);
const valueinBoolean6 = Boolean(value6);
const valueinBoolean7 = Boolean(value7);

console.table([valueinBoolean1, valueinBoolean2, valueinBoolean3, valueinBoolean4, valueinBoolean5, valueinBoolean6, valueinBoolean7]);

//Question#9
const ordrId = 78932;
let orderIDInString = String(ordrId);
console.log("Order ID: " + ordrId);
console.log("Order ID in String: " + orderIDInString);
console.log("Type of Order ID: " + typeof ordrId);
console.log("Type of Order ID in String: " + typeof orderIDInString);

//Question#10
console.log("10"+10); //My prediction => 1010 Because the number 10 is converted to a string and concatenated with the string "10".
console.log(10+"10"); //My prediction => 1010 Because the number 10 is converted to a string and concatenated with the string "10".
console.log("10"+5+5); //My prediction => 1055 Because the string "10" is concatenated with the numbers 5 and 5.
console.log(10+5+"5"); //My prediction => 155 Because the numbers 10 and 5 are added together, then converted to a string and concatenated with the string "5".
console.log("20"-5); //My prediction => 15 Because the string "20" is converted to a number and subtracted from the number 5.
console.log("20"*2); //My prediction => 40 Because the string "20" is converted to a number and multiplied by the number 2.
console.log("20"/4); //My prediction => 5 Because the string "20" is converted to a number and divided by the number 4.

//Question#11
const burgerPrice = 850;
const pizzaPrice = 1600;
const drinksPrice = 250;

const totalPrice = burgerPrice + pizzaPrice + drinksPrice;

const amounteachfriendshouldPay = totalPrice / 3;

const remainingAmount = totalPrice % 3;

console.log("Total Price: " + totalPrice);
console.log("Amount Each Friend Should Pay: " + amounteachfriendshouldPay);
console.log("Remaining Amount: " + remainingAmount);

//Question#12
const amountperHour = 18;
let totalHoursWorked = 35;
let bonus = 120;
let totalEarningsbeforeBonus = amountperHour * totalHoursWorked;
let finalPay = totalEarningsbeforeBonus + bonus;
let halfPay = finalPay / 2;
let remainingPay = finalPay / 100;

console.log("Total Earnings Before Bonus: " + totalEarningsbeforeBonus);
console.log("Final Pay: " + finalPay);
console.log("Half Pay: " + halfPay);
console.log("Remaining Pay: " + remainingPay);

//Question#13
let score = 100;

let incrementedScore = score + 50;
let decrementedScore = score - 20;
let totalScore = incrementedScore + decrementedScore; 

let doubleScore  = totalScore * 2;

console.log(score++);
console.log(++score);
console.log(incrementedScore);
console.log(decrementedScore);
console.log(totalScore);
console.log(doubleScore);


//Question#14
const celsiusTemperature = "35";

let celsiusInNumber = Number(celsiusTemperature);

let fahrenheitTemperature = (celsiusInNumber * 9/5) + 32;

console.log("Celsius Temperature: " + celsiusTemperature + "°C");
console.log("Fahrenheit Temperature: " + fahrenheitTemperature + "°F");


//Question#15
const price = "1500";
const delivery = "250";

let priceInNumber = Number(price);
let deliveryInNumber = Number(delivery);

let totalCost = priceInNumber + deliveryInNumber;
console.log("Total Cost: " + totalCost);

// Question#16
const currentScore = 30; //Because the score is a changeable value, we should use let instead of const to declare it. 
let currentScore = 20;

console.log("Current Score: " + currentScore);

//Question#17
const customerID = 101; //It is declared as a constant because the customer ID is a unique identifier that should not change once assigned.
let customerEmail = "customer@example.com";
let accountBalance = 5000; //It is declared as a variable because the account balance can change over time based on transactions.
accountBalance  = 4500;

console.log("Customer ID: " + customerID);
console.log("Customer Email: " + customerEmail);
console.log("Account Balance: " + accountBalance);


//Mini Project
const customerName = "Ghulam Ghous";
const serviceName = "Web Development";
const servicePrice = "5000";
const maintenancePrice = "200";
const numberofMaintenanceMonths = "6";
const taxPercentage = 10;

const servicePriceInNumber = Number(servicePrice);
const maintenancePriceInNumber = Number(maintenancePrice);
const numberofMaintenanceMonthsInNumber = Number(numberofMaintenanceMonths);

const totalMaintenanceCost = maintenancePriceInNumber * numberofMaintenanceMonthsInNumber;
const subtotal = servicePriceInNumber + totalMaintenanceCost;
const taxAmount = (subtotal * taxPercentage) / 100;
const finalInvoice = subtotal + taxAmount;

const customerNameinBoolean = Boolean(customerName);

const finalInvoiceInString = String(finalInvoice);

console.log("Customer Name: " + customerName); 
console.log("Service Name: " + serviceName);
console.log("Service Price: " + servicePriceInNumber);
console.log("Total Maintenance Cost: " + totalMaintenanceCost);
console.log("Subtotal: " + subtotal);
console.log("Tax Amount: " + taxAmount);
console.log("Final Invoice: " + finalInvoice);
console.log("Is Customer Name Truthy? " + customerNameinBoolean);
console.log("Final Invoice in String: " + finalInvoiceInString);