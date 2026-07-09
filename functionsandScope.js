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