function returnSqaure(num1){
    if(!num1){
        console.log("Enter a Valid Number")
    }
    else{
    let square = num1*num1
    return square;
    }
}
console.log(returnSqaure(8));

function returnFullName(firstName, lastName){
    return firstName + lastName;
}

console.log(returnFullName('Ghulam ','Ghous'))

function greetMessage(username){
    return `Hello ${username}, Welcome Back`
}
console.log(greetMessage('Ghulam'));
console.log(greetMessage('Ali'));
console.log(greetMessage('Bilal'));


function calculateAge(birthYear, currentYear){
    let currentAge = currentYear - birthYear;
    return currentAge;
}

console.log(calculateAge(2002,2026))


function calculateMarks(obtainedMarks, totalMarks){
    let percentage  = obtainedMarks/totalMarks*100;
    return percentage
}

console.log(calculateMarks(48,90));


function convertMinutestoSeconds(minutes){
    return minutes * 60;
}

console.log(convertMinutestoSeconds(90))

function defaultCountry(country = "Pakistan"){
    return country;
}
console.log("Ghulam is from ", defaultCountry())
console.log("Ali is from ",defaultCountry("UAE"))

function course(studentName, courseName = "JavaScript"){
    return `${studentName} is learning ${courseName}`
}
console.log(course("Ghulam Ghous"))

function totalBill(){
    console.log("Total bill is 800")
}

function calculateBill(amount){
    return amount
}

let bill = totalBill()
console.log(bill);

let bill1 = calculateBill(60);
console.log(bill1)


function calculateDiscount(price , discountPercentage){
    let discount = price * (discountPercentage/100)
    return discount
}

console.log("The Dsicount is", calculateDiscount(2000 , 20))


function calculateDiscountedPrice(price, discountPercentage){
    let discountAmount = price * (discountPercentage/100);
    let finalPrice = price - discountAmount;
    return finalPrice;
}

console.log("The price after discount is", calculateDiscountedPrice(15000,5))


function calculateTax(amount, percentage){
    let taxAmount = amount * (percentage/100)
    return taxAmount;
}
console.log("The tax amount is:",calculateTax(3000,5))


function finalInvoice(servicePrice, taxAmount){
    return servicePrice + taxAmount;
}

console.log('The final invoice amount is:',finalInvoice(9000,90))


function prices(...getPrice){
    return getPrice;
}
console.log(prices(800,600,180))

function item(firstItem, SecondItem, ...otherItems){
    return firstItem, SecondItem, otherItems
}
console.log(item(890,96,1200,4900,96))

const student = {
    name: "Ghulam Ghous",
    age: 24,
    course: "JavaScript",
    city: "Lahore"
}

function getStudentDetails(anyObject){
    return`${anyObject.name} is ${anyObject.age} years old and learning ${anyObject.course} in ${anyObject.city}`

}
console.log(getStudentDetails(student))

const product = {
    productName : "IPhone",
    price : 1100,
    brand: "Apple",
    inStock : true
}

function getProductDetails(anyObject){
    return`${anyObject.productName} by ${anyObject.brand} costs ${anyObject.price}`
}
console.log(getProductDetails(product));


const freelancer = {
    name : "Ghulam Ghous",
    skill : "React",
    hourlyRate : 20,
    country : "Pakistan"
}

function getFreelancerDetails(object){
    return `${object.name} is a ${object.skill} developer from ${object.country} and charges $${object.hourlyRate} per hour`
}
console.log(getFreelancerDetails(freelancer))

const course1 = {
    title : "JS",
    instructor: "Hitesh",
    price: 200,
    duration : "3 months"
}

function getCourseDetails(obj){
    return `${obj.title} by ${obj.instructor} costs ${obj.price} and lasts ${obj.duration}`
}

console.log(getCourseDetails(course1));


function getLaptopDetails(newObject){
    return `${newObject.brand} ${newObject.model} has ${newObject.ram} and costs ${newObject.price}`
}

console.log(getLaptopDetails = {
    brand: "DELL",
    model : "XPS",
    price : 250000,
    ram : "16GB"
})


const newInvoice = {
    clientName : "Saif Rashid",
    serviceName : "Project explanation",
    servicePrice : 5500,
    tax : 800
}

function getNewInvoiceTotal(obj1){
    const total = obj1.servicePrice + obj1.tax;
    return total;
}

console.log("The Total Amount is", getNewInvoiceTotal(newInvoice));


const  userDetails = {
    username: "Saif Rashid",
    email: "rfais770@gmail.com",
    profession : "Software Developer",
    isAvailable  : true
}

function getUserDetail(userObject){
    return `${userObject.username} and the email is ${userObject.email} ${userObject.profession} and the availability is ${userObject.isAvailable}`
}

console.log(getUserDetail(userDetails));



const carDetails = {
    brand: "Toyota",
    model : "Aqua",
    price  : 3000000
}

carDetails.price = 400000;


function getCarDetails(carObject){
    return `I drive ${carObject.brand} ${carObject.model} and its price is ${carObject.price}`
}

console.log(getCarDetails(carDetails));

function checkOrderDetails(userOrder) {
    console.log("Username is:", userOrder.username);
    console.log("Price is:", userOrder.price);
}

checkOrderDetails({
    username: "Ghulam Ghous"
});

/* EXPLANATION OF THE RESULT:
   What happens to price? It outputs: undefined.
*/

const programming = ["JavaScript", "Java", "Python"]

function getArrayValue(newArray){
    return newArray[0]
}

console.log(getArrayValue(programming))


const skills = ["JS", "Python", "C#"]

function getSkillsValues(array1){
    return array1[array1.length-1];
}

console.log(getSkillsValues(skills))



const products = [
    "Laptop", "Mobile", "Keyboard", "Mouse"
]

function returnThirdValue(thirdArray){
    return thirdArray[2];
}

console.log("The third value is :", returnThirdValue(products))


const students  = [
    "Ghulam Ghous",
    "Saif Rashid",
    "Nauman Yasin",
    "Abdul Rehman",
    "Dayyan Asim"
]

function returnStudent(studentArray){
    return studentArray[1];
}

console.log("The Second Student is : ", returnStudent(students));


function returnFirstValue(getArray1){
    return getArray1[0];
}

console.log("The first value is: ",returnFirstValue(["React","Node","Python"]))


const pricess = [
    500, 1000, 1500, 2000
]

function returnLastPrice(priceArray){
    return priceArray[3];
}

console.log("The Last Price is: ",returnLastPrice(pricess))


const skillss = [
    "HTML", "CSS", ["React", "Next.Js"]
];

function getSkillArray(skillssArray){
    return skillssArray[2][1]
}

console.log("The Nested Array Value: ", getSkillArray(skillss));


const objectArray  = [
    {"title": "JS", "price" : 20000, "instructor" : "Ghulam Ghous"},
    {"title": "Python", "price" : 40000, "instructor" : "Saif Rashid"},
    {"title": "C#", "price" : 60000, "instructor" : "Nauman Bhatti"}
]


function returnObjectArray(arrayObject){
    return arrayObject[1].title;
}

console.log("The object array is: ", returnObjectArray(objectArray));


function returnThirdObjectCourse(arrObject, objectarray){
    return arrObject[2];
}

console.log("The third object is:" , returnThirdObjectCourse(objectArray))


const freelancerss = [
    {"Name": "Ghulam Ghous", "Skill" : "Full Stack Developer", "Rate" : 30},
    {"Name": "Saif Rashid", "Skill" : "AI Developer", "Rate" : 40},
    {"Name": "Nauman Bhatti", "Skill" : "Game Developer", "Rate" : 20}
]

function getfreelancerssDetails(freelancersArray){
    return freelancersArray[0].Rate;
}

console.log("The first freelancer rate is:" , getfreelancerssDetails(freelancerss));



const cart2 = ["Fries", "Handwash", "Soap", "Shampoo"];

function returnFirstCartItem(cartArray) {
    return cartArray[0];
}
function returnLastCartItem(cartArray) {
    return cartArray[cartArray.length - 1]; 
}

console.log("The first cart item is:", returnFirstCartItem(cart2));
console.log("The last cart item is:", returnLastCartItem(cart2));