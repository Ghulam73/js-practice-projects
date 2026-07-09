// //Question#1
// const student = {
//     fullName : "Ghulam Ghous",
//     Age : 25,
//     Email : "ghulam.ghous2002@gmail.com",
//     isEnrolled : true,
//     subjects : ["Math", "English", "Science"],
// }

// console.log(student);
// console.log(student.fullName);
// console.log(student["Email"]);
// console.log(student.subjects[1]);

// //Question#2
// const product = {
//     productName : "Laptop",
//     manufacturingYear : 2022,
//     price : 1500,
//     inStock : true,
// }

// console.log(product["manufacturingYear"]);


// //Question#3
// const user = {
//     username : "john_doe",
//     email : "user@gmail.com",
//     city: "New York",
//     isLoggedIn : false
// }

// user.email = "ghulam@gmail.com";
// user.isLoggedIn = true;
// user.city = "Los Angeles";
// console.log(user);



// //Question#4
// const laptop ={
//     brand : "Dell",
//     model : "XPS 13",
//     price : 1200,
// }

// laptop.ram = "16GB";
// laptop.storage = "512GB SSD";
// laptop.operatingSystem = "Windows 10";

// console.log(laptop);


// //Question#5
const symbolKey = Symbol("userid");
// const user = {
//     username : "john_doe",
//    ["userid"] : 12345     
// }

// console.log(user);
// console.log(user["userid"]);
// console.log(typeof user["userid"]);

// Question#6
// const bankAccount = {
//     accountHolder: "John Doe",
//     balance: 2000,
//     accountType : "Savings",
// }

// let freezeAccount = Object.freeze(bankAccount);

// bankAccount.balance = 3000;
// bankAccount.accountType = "Checking";
// bankAccount.Email = "gmail.com";

// console.log(bankAccount);

// Question#7
// const user = {
//     username: "john_doe",
//     profession: "Software Engineer",
//     hello: function() {
//         console.log("Hello, JS User");
//     },
//     hello1: function() {
//         console.log(`Hello, ${this.username}, you are a ${this.profession}`);
//     }
// };
// console.log(user.username);
// console.log(user.profession);
// user.hello();
// user.hello1();

// Question#8
// const employee = {
//     employeeID : 12345,
//     email : "gmail.com",
//     personalDetails : {
//         firstName : "Ghulam",
//         lastName : "Ghous",
//         Age : 25,
//     },
//     addresses : {
//         street : "123 Main St",
//         city : "New York",
//         country : "USA",
//     }
// }
// console.log(employee.email);
// console.log(employee.personalDetails.firstName);
// console.log(employee.addresses.country);

// Question#9
// const order = {
//     orderId : 12345,
//     customerDetails : {
//         name : "Ghulam Ghous",
//         email : "gmail.com"
//     },
//     productDetails : {
//         productName : "Laptop",
//         price : 1500,
//         quantity : 2
//     },
//     paymentDetails : {
//         paymentMethod : "Credit Card",
//         paymentStatus : "Paid"
//     }
// }
// console.log(order.customerDetails.name);
// console.log(order.productDetails.price);
// console.log(order.paymentDetails.paymentStatus);
// order.paymentDetails.paymentStatus = "Pending";
// console.log(order.paymentDetails.paymentStatus);

// Question#10
// const developer = {
//     name : "Ghulam Ghous",
//     contact : {
//         email : "ghulam@google.com",
//         phone : "123-456-7890"
//     },
//     skills : {
//         frontend : ["HTML", "CSS", "JavaScript"],
//         backend : ["Node.js", "Express", "MongoDB"]
//     }
// }

// developer.contact.email = "ghulam@microsoft.com"
// developer.skills.frontend.push("React");  
// developer.skills.backend.push("Python");

// console.log(developer);

// Question#11
// const personalDetails = {
//     name : "Ghulam Ghous",
//     age : 25,
//     city : "New York"
// }

// const professionalDetails = {  
//     profession : "Software Engineer",
//     experience : 5,
//     company : "Tech Solutions"
// }

// let combine = Object.assign({}, personalDetails, professionalDetails);
// console.log(combine);


// Question#12
// const personalDetails = {
//     name : "Ghulam Ghous",
//     age : 25,
//     city : "New York"
// }

// const professionalDetails = {  
//     profession : "Software Engineer",
//     experience : 5,
//     company : "Tech Solutions"
// }
// let combine = {...personalDetails, ...professionalDetails};
// console.log(combine);

// Question#13
// const users = [
//     {id: 1, name: "Ghulam Ghous", email: "ghulam@google.com"},
//     {id: 2, name: "Ali Khan", email: "ali@google.com"},
//     {id: 3, name: "Saif", email: "saif@google.com"}  
// ]

// console.log("complete users", users);
// console.log(users[0]);
// console.log(users[1].email);
// console.log(users[2].name);

// const products = [
//     {id: 125, productName: "Hair Oil", price: 650, inStock: true},
//     {id: 189, productName: "Cold Drink", price: 200, inStock: false},
//     {id: 560, productName: "Chips", price: 60, inStock: true}
// ]

// console.log("The First Product Price is ", products[0].price);
// console.log("The Second Product Name is ", products[1].productName);
// console.log("The Third Product Status is ", products[2].inStock);

// products[1].inStock = true;
// console.log(products[1].inStock);

// const course = {
//     courseName: "JavaScript Basics",
//     price: 5000,
//     instructor: "Hitesh Choudhary",
//     duration: "3 months",
//     isAvailable: true
// };
// let newVariable  = Object.keys(course);
// let newArray = Object.values(course);
// let entries = Object.entries(course);
// console.log(newVariable);
// console.log(newArray);
// console.log(entries)

// console.log(course.hasOwnProperty("courseName"));
// console.log(course.hasOwnProperty("price"));
// console.log(course.hasOwnProperty("instructor"));
// console.log(course.hasOwnProperty("duration"));
// console.log(course.hasOwnProperty("isAvailable"));


// const course = {
//     courseName: "JavaScript Basics",
//     price: 5000,
//     instructor: "Hitesh Choudhary",
//     numberofVideos: 80
// };

// let {courseName:title, numberofVideos:videos} = course;

// console.log(title);
// console.log(videos);


// const user = {
//     name: "Ghulam Ghous",
//     email: "ghulam.ghous2002@gmail.com",
//     address:{
//         city: 'Lahore',
//         country: 'Pakistan'
//     }
// }


// const {name:userName, address:{city,country}} = user;

// console.log(userName);
// console.log(city);
// console.log(country);


// const  user = {
//     name: "Ghulam Ghous",
//     course: "JS for Beginners",
//     price: 8900
// }

// {
//     "name": "Ghulam Ghous",
//     "course": "Advanced JavaScript",
//     "price": 99.50
// }


