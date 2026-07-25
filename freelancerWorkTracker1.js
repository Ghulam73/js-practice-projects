const freelancer = {
  name: "Bilal",
  skills: "Laravel Developer",
  hourlyRate: 56,
  totalHoursWorked: 6,
  projectStatus: "Pending",

  showWorkSummary: function () {
    return `${this.name} is working as a ${this.skills}. He worked ${this.totalHoursWorked}hours at ${this.hourlyRate}$/hour and the project status is ${this.projectStatus}`;
  },
};

const calculatePayment = (hourlyRate, totalHoursWorked) =>
  hourlyRate * totalHoursWorked;

const calculatePlatformfee = (totalPayment, feePercentage) =>
  (totalPayment * feePercentage) / 100;

const calculateFinalPayment = (totalPayment, platformFee) =>
  totalPayment - platformFee;

const createPaymentReport = (
  freelancerName,
  totalPayment,
  platformFee,
  finalEarning,
  paymentStatus,
) => ({
  freelancerName: freelancerName,
  totalPayment: totalPayment,
  platformFee: platformFee,
  finalEarning: finalEarning,
  paymentStatus: paymentStatus,
});

console.log(freelancer.showWorkSummary());
freelancer.totalHoursWorked = 7;
freelancer.projectStatus = "Completed";
console.log(freelancer.showWorkSummary());

// Step 1: calculate and store the value
const totalPayment = calculatePayment(freelancer.hourlyRate, freelancer.totalHoursWorked);
console.log("The calculation of the payment is :", totalPayment);

// Step 2: calculate platform fee using the real totalPayment
const platformFee = calculatePlatformfee(totalPayment, 10);
console.log("The Platform fee is:", platformFee);

// Step 3: calculate final payment using real totalPayment and platformFee
const finalPayment = calculateFinalPayment(totalPayment, platformFee);
console.log("The final payment for the freelancer is : ", finalPayment);

// Step 4: build the report with actual values
const finalReport = createPaymentReport(
  freelancer.name,
  totalPayment,
  platformFee,
  finalPayment,
  "Completed",
);

console.log("\n--- Final Payment Report ---");
console.log(finalReport);