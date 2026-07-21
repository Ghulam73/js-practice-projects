const client = {
    clientName : "Ghulam Ghous",
    projectName : "Pyhsiogic",
    budget : 50000,
    status :  "In Progress" ,

    showProjectSummary : function(){
        console.log(`Client ${this.clientName} has a project called ${this.projectName} with a bugdet of ${this.budget}. Current Status is ${this.status}`)
    }
}

client.showProjectSummary()
client.status = "Completed"
client.showProjectSummary()


const product = {
    productName : "Laptop",
    price : 200000,
    discountPercentage : 10,

    showDiscountedPrice : function(){
        discountedPrice = (this.price - this.discountPercentage) / 100
        finalPrice = this.price - discountedPrice 
        console.log("The Final Price is : ", finalPrice);
    }
}
product.showDiscountedPrice()


const bankAccount = {
    accountHolder : "Bilal",
    balance : 500000,
    accountType : "Savings Account",

    showBalance : function(){
        console.log(`${this.accountHolder} has ${this.balance} in his ${this.accountType}`)
    }
}
bankAccount.showBalance()
bankAccount.balance =  75000000;
bankAccount.showBalance()


const calculateInvoice = () =>{
    let servicePrice  = 8000
    let taxPercentage = 10

    let taxPrice = (servicePrice - taxPercentage)/100

    finalPrice = servicePrice - taxPrice

    console.log("The invoice amount is: ",finalPrice)
} 

calculateInvoice()

const createJobApplication = ()=> ({
  candidateName: "Ghulam Ghous",
  role: "Junior Full Stack Developer",
  expectedSalary: 80000,
  isAvailable: true
})

console.log(createJobApplication())