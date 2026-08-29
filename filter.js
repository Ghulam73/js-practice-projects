const freelancer = [
    { name: 'Ghulam Ghous', profession: 'Full Stack Developer', age: 25, country: 'Pakistan', status: 'Available' },
    { name: 'Ayesha Khan', profession: 'UI/UX Designer', age: 28, country: 'Pakistan', status: 'Not Available' },
    { name: 'Ahmed Ali', profession: 'Backend Developer', age: 30, country: 'Pakistan', status: 'Available' }
];

const filteredFreelancer = freelancer.filter((item) => item.status === 'Available');
console.log(filteredFreelancer);

const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' , inStock: true},
    { name: 'Phone', price: 800, category: 'Electronics' , inStock: false},
    { name: 'Tablet', price: 600, category: 'Electronics' , inStock: true},
    { name: 'Headphones', price: 150, category: 'Accessories' , inStock: true},
    { name: 'Keyboard', price: 100, category: 'Accessories' , inStock: false}
];

const customerBudget  = 1000;
const filteredProducts = products.filter((item) => item.price <= customerBudget && item.inStock);
console.log(filteredProducts);


const applicants  = [
    {name: 'Ali',  experience: 9, skills: ['JavaScript', 'React'], expectedSalary: 50000},
    {name: 'Sara',  experience: 5, skills: ['Python', 'Django'], expectedSalary: 70000},
    {name: 'Ahmed',  experience: 8, skills: ['Java', 'Spring'], expectedSalary: 90000},
    {name: 'Ayesha',  experience: 3, skills: ['C++', 'Qt'], expectedSalary: 60000}
]

const filteredApplicants = applicants.filter((applicant) => applicant.experience >= 3 && applicant.expectedSalary <= 70000 && applicant.skills.includes('JavaScript'));
console.log(filteredApplicants);


const productsList = [500, 1200, 800, 2500, 3000];
const increasedPrices = productsList.map((price)=> price + (price * 0.1));
console.log(increasedPrices);


const freelancers = [
    {name: 'Ghulam Ghous', hourlyRate: 20, hoursWorked: 40},
    {name: 'Ayesha Khan', hourlyRate: 25, hoursWorked: 35},
    {name: 'Ahmed Ali', hourlyRate: 30, hoursWorked: 30}
]

const totalEarnings = freelancers.map((freelancer)=>{
    return {
    name: freelancer.name,
    totalEarnings: freelancer.hourlyRate * freelancer.hoursWorked
};
});
console.log(totalEarnings);


const ordersList = [
    {orderId: 1, customerName: 'Ali', items: 3, totalAmount: 1500},
    {orderId: 2, customerName: 'Sara', items: 2, totalAmount: 2000, },
    {orderId: 3, customerName: 'Ahmed', items: 1, totalAmount: 1200},
    {orderId: 4, customerName: 'Ayesha', items: 4, totalAmount: 3200, },
    {orderId: 5, customerName: 'Omar', items: 2, totalAmount: 2800, },
    {orderId: 6, customerName: 'Zainab', items: 5, totalAmount: 5000, }
];

const completedOrders = ordersList.map((order)=>{
    return {
        orderId: order.orderId,
        customerName: order.customerName,
        totalPayment: order.totalAmount,
        status: order.totalAmount > 5000 ? 'High Order' : 'Standard Order'
    };
})

console.log(completedOrders);   


const sales = [12000, 8500, 15000, 9000, 11000]

const totalSales = sales.reduce((acc, sale)=>acc + sale,0);
console.log(`Total Sales: ${totalSales}`);


const freelancersList = [
    { project: "Website", price: 1200 },
    { project: "Mobile App", price: 2500 },
    { project: "API Development", price: 800 },
    { project: "Dashboard", price: 1800 }
]
let projectsWorth = 0;
const totalProjectRevenue = freelancersList.reduce((acc, amount)=> acc + amount.price, 0 ) 

const transactions = [
    { type: "income", amount: 50000 },
    { type: "expense", amount: 12000 },
    { type: "income", amount: 30000 },
    { type: "expense", amount: 8000 },
    { type: "income", amount: 20000 },
    { type: "expense", amount: 15000 }
]

const financialSummary = transactions.reduce((acc, transaction)=>{
    if(transaction.type === "income"){
        acc.totalIncome += transaction.amount;
    } else if(transaction.type === "expense"){
        acc.totalExpense += transaction.amount;
    }
    return acc;
}, { totalIncome: 0, totalExpense: 0 });

console.log(financialSummary);