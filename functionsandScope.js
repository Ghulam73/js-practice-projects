function saymyName(){
    console.log("Ghulam Ghous");
}

saymyName();

function addTwoNumbers(num1, num2){
    let sum = num1 + num2;
    return sum 
}

console.log(addTwoNumbers(10, 20))
console.log(addTwoNumbers(50, 70))
console.log(addTwoNumbers(5, 8))


function consoleLog(num3 , num4){
    console.log("Sum is:", num3+num4);
}

function addTwoNumbeers(num5, num6){
    let sum = num5 + num6;
    return sum 
}

consoleLog(8,9);
console.log(addTwoNumbeers(5, 8))


function loginUserMessage(username){
    return `${username} just logged in`;
}

console.log(loginUserMessage("Ghulam Ghous"));
console.log(loginUserMessage("Ali"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());

function loginUserMessage(username = "Guest"){
    return `${username} just logged in`;
}

console.log(loginUserMessage("Ghulam Ghous"));
console.log(loginUserMessage("Ali"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());


function multiplyNumbers(num1, num2){
    let multiply = num1*num2;
    return multiply;
}


console.log(multiplyNumbers(9,7));
console.log(multiplyNumbers(8,3));


function fullName(firstName, lastName){
    return `${firstName} ${lastName}`
}

const myName = fullName("Ghulam", "Ghous");
console.log(myName);


function calculateCartPrice(...prices){
    return prices;
}

console.log(calculateCartPrice(600,877,69));

console.log(calculateCartPrice(369,897,62));


function returnRestValues(val1, val2, ...remainingValues){
    let sum = val1+val2+remainingValues;
    return sum;
}

console.log(returnRestValues(100, 200, 300, 400, 500));


function studentMarks(...marks){
    return marks;
}

console.log(studentMarks(80, 75, 90, 60))


const user = {
    username: "Ghulam Ghous",
    price: 999
}

// function handleObject(anyObject){
//     return `Username is ${anyObject.username} and price is ${anyObject.price}`
// }

// console.log(handleObject(user))


const customer = {
    id: 10293,
    profile: {
        name: "Ghulam",
        tier: "Premium"
    },
    cart: [299, 150, 45, 900]
};

function printReceipt(anyObject){
    const discountPrice = null;
    const sum = anyObject.cart;
    const total = sum.reduce((sum, item) => sum + item, 0);
    console.log(total);
    return `${anyObject.profile.name} (${anyObject.profile.tier}) spent a total of ${total}. Discount code applied : ${discountPrice}`;
}


console.log(printReceipt(customer))


function handleObject2(anyObject){
    return `Username is ${anyObject.username} and the price is ${anyObject.price}`
}

const newUser = {
    username : "Ali",
    price : 789
}

console.log(handleObject2(newUser));

