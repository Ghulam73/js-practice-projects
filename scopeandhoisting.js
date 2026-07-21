const appName = "Ghulam Ghous"

function callAppName (){
    console.log("The app name is :", appName)
}

callAppName()

function showCity(){
    const city = "Lahore"
    console.log("The city is:",city);
}
showCity()
//console.log(city) //The scope of block is inside the function only that's why it can't be accessed outside the function.

const username = "Global User";
function printUsername(){
    const username = "Local User";
    console.log("The username is: ", username)
}
printUsername();
    console.log("The username is: ", username)


let loginStatus = "Logged Out";
function changeLoginStatus(){
    loginStatus = "Logged in"
    console.log("The login status is:" , loginStatus)
}

changeLoginStatus();


function globalVariable(){
    let paymentStatus = "Pending"
    console.log(paymentStatus)
}

let paymentStatus = "Paid";
globalVariable();