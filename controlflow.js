const balanceAmount = 50000;
const withdrawalAmount  = 7000;

if(withdrawalAmount<balanceAmount){
    console.log("Withdrawal Successful")
}else{
    console.log("Insufficient Balance")
}

const isMaintainanceMode = true
const isAdmin = false
const websiteName = "Codexify Solutions"

if((isMaintainanceMode == false) && (isAdmin == false)){
    console.log("The website is in Maintainance Mode")
}else{
    console.log(`Welcome to ${websiteName}`)
}


const availability = true;
const currentProjects = 9;
const experienceYear = 8;

if(availability == true && currentProjects == 3 && experienceYear <= 2){
    console.log("The freelancer is available")
}else{
    console.log("The freelancer is not available")
}


const speed = 70;

if(speed >= 100){
    console.log("The speed is very fast")
}else if(speed >= 50 && speed < 100){
    console.log("Average Speed")
}else{
    console.log("Slow Speed")
}

const experience = 8;
const degreeCompleted = true;
const portfolioAvailable = true;

if(experience>=5 ){
    console.log("Senior Developer")
}else if(experience>=2 && experience<4 && portfolioAvailable){
    console.log("Mid Developer")
}else if(degreeCompleted){
    console.log("Junior Developer")
}else{
    console.log("Not Eligible")
}


const totalSpend = 900000;
const activeSubscription = true;
const referredClients = 90;

if (!activeSubscription) {
    console.log("Your subscription is not active.");
}
else if (totalSpend >= 1000000 && referredClients >= 80) {
    console.log("You are a VIP member.");
}
else if (totalSpend >= 750000) {
    console.log("You are a Premium member.");
}
else if (totalSpend >= 500000) {
    console.log("You are a Regular member.");
}
else {
    console.log("You are a New member.");
}

const paymentMethod = "Jazzcash"

switch(paymentMethod){
    case "EasyPaisa" :
        console.log("The payment is done by Easypaisa")
        break;
    case "Jazzcash" :
        console.log("The payment is done by Jazzcash")
        break;
    case "CreditCard" :
        console.log("The payment is done by Credit Card")
        break;
    case "Bank Transfer" :
        console.log("The payment method is Bank Transfer")
        break;
    default :
        console.log("Invalid Payment Method")
        break;
}

const department = "Development"

switch (department){
    case "HR" :
        console.log("The HR Department handles the papaerwork and the recruituing part")
        break;
    case "Development" :
        console.log("The Development Department is responsible for developing applications and make existing applications more scalable")
        break;
    case "Marketing" : 
        console.log("The Marketing team is responsible for the advertising the applications built by the development team and make revenue out of it")
        break;
    case "Finance": 
        console.log("The Finance team is responsible for the record of the revenue created by the Marketing team and other departments")
        break;
    case "Sales":
        console.log("The Sales team is responsible for generating revenue through different strategies like emails, cold calls and all that")
        break;
    default :
        console.log("Please enter a valid Department for responsibilities")
        break;
}

const ticket = "Feature Request"

switch (ticket){
    case "Bug" :
        console.log("Please contact the Development Department")
        break;
    case "Refund" :
        console.log("Please contact the Finance Department")
        break;
    case "Feature Request" :
        console.log("Please contact the Development Department")
        break;
    case "Account Issue" :
        console.log("Please contact the IT Department")
        break;
    default :
        console.log("Please enter a valid issue")
        break;
}

const userName = "Ghulam Ghous"
if(userName){
    console.log(`Welcome ${userName}`)
}else{
    console.log("Please enter username")
}

const cart = []
if(cart.length > 0){
    console.log("Proceed to checkout")
}
else{
    console.log("The cart is empty")
}


const company = {
    companyName  : "Codexify Solutions",
    ownerName : "Bilal Hussain",
    companyEmail : "info@codexifysolutions.com",
    phone : ""
}

if(company.companyName && company.ownerName && company.companyEmail && company.phone){
    console.log("Registration Successfull")
}else {
    console.log("Can't register because of missing information details are given below")
}

if(!company.companyName){
    console.log("- Company Name")
}else if(!company.ownerName){
    console.log("- Owner's Name")
}else if(!company.companyEmail){
    console.log("- Company Email")
}else{
    console.log("- Phone")
}



//Logical Operator
const userAge = 8;

if(userAge>=18){
    console.log("The User can watch the movie")
}else{
    console.log("The User should be accompanied by a guardian")
}

const courseEnrollment = {
    emailVerified : true,
    feesPaid : false,
    documentsUploaded : true
}

if(courseEnrollment.emailVerified && courseEnrollment.feesPaid && courseEnrollment.documentsUploaded){
    console.log("The course is enrolled successfully")
}else{
    console.log("Course Enrollment Failed!!!!")
    console.log("Check below for the missing information")
}
if(!courseEnrollment.documentsUploaded){
    console.log("- Documents not Uploaded. Please upload the required documents and try again")
}if(!courseEnrollment.emailVerified){
    console.log("- Email is not verified. Please verify and try again")
}else{
    console.log("- Dues not cleared. Please clear your outstanding dues and try again")
}


const user = {
    isEmailVerified : true,
    isSubscriptionActive : true,
    isAccountSuspended : false,
    istwoFactorEnabled : false
}

if(user.isEmailVerified && !user.isAccountSuspended && user.isSubscriptionActive && user.istwoFactorEnabled){
    console.log("The login is successful")
}else if(!user.isEmailVerified){
    console.log("The email is not verified")
}else if(user.isAccountSuspended){
    console.log("The account is suspended please contact the administrator")
}else if(!user.isSubscriptionActive){
    console.log("The subscription is not active")
}else if(!user.istwoFactorEnabled){
    console.log("Two Factor Authentication is not verified on this account")
}else{
    console.log("Please enter valid credentials")
}


const parkingSpot = 9
let status = parkingSpot>0 ? "Parking Available" : "Parking Not Available"
console.log(status)

const freelancerRating = 4.3
let rating = freelancerRating>=4.8 ? "Top Rated" : "Standard Freelancer"
console.log(rating)

const cpuUsage = 60;
const ramUsage = 80;

let serverHealth = (cpuUsage<=80 && ramUsage<=80)? "Server Healthy" : "Server Overloaded"
console.log(serverHealth)