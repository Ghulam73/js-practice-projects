const freelancer = {
  name: "Ghulam",
  skill: "React developer",
  hourlyRate: 20,
  totalHoursWorked: 40,
  projectStatus: "In Progress",

  showWorkSummary: function () {
    console.log(
      `${this.name} is working as a ${this.skill}. He worked ${this.totalHoursWorked} hours at $${this.hourlyRate}/hour. Project status: ${this.projectStatus}.`
    );
  },
};


console.log("--- Initial Status ---");
freelancer.showWorkSummary();


freelancer.totalHoursWorked = 60;
freelancer.projectStatus = "Completed";


console.log("\n--- Updated Status ---");
freelancer.showWorkSummary();



const calculatePayment = (hourlyRate, totalHoursWorked) => hourlyRate * totalHoursWorked;

const calculatePlatformFee = (totalPayment, feePercentage) => (totalPayment * feePercentage) / 100;

const calculateFinalEarning = (totalPayment, platformFee) => totalPayment - platformFee;

const createPaymentReport = (freelancerName, totalPayment, platformFee, finalEarning, paymentStatus) => ({
  freelancerName: freelancerName,
  totalPayment: totalPayment,
  platformFee: platformFee,
  finalEarning: finalEarning,
  paymentStatus: paymentStatus
});

console.log("\n--- Final Payment Report ---");
const totalPayment = calculatePayment(freelancer.hourlyRate, freelancer.totalHoursWorked); 
const platformFee = calculatePlatformFee(totalPayment, 10); 
const finalEarning = calculateFinalEarning(totalPayment, platformFee); 
const finalReport = createPaymentReport(
  freelancer.name,
  totalPayment,
  platformFee,
  finalEarning,
  "Pending"
);

console.log(finalReport);