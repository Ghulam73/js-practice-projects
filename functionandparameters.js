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