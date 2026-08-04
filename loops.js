for (let i = 1; i <= 10; i++){
    //console.log(`Invoice #${i} generated successfully`)
}


for (let j = 1; j<=20 ; j++){
    if(j%3==0){
        //console.log(`Employee #${j} is eligible for bonus`)
    }
    else{
        //console.log(`Employee #${j} is not eligible for bonus`)
    }
}

let reservedSpots = 0;
let occupiedSpots = 0;
let availableSpots = 0;

for (let spot = 1; spot <= 50; spot++) {

    if (spot % 5 === 0) {
        //console.log(`Spot ${spot} → Reserved`);
        reservedSpots++;
    }
    else if (spot % 2 === 0) {
        //console.log(`Spot ${spot} → Occupied`);
        occupiedSpots++;
    }
    else {
       // console.log(`Spot ${spot} → Available`);
        availableSpots++;
    }

}

console.log("\n----- Parking Summary -----");
console.log(`Reserved Spots: ${reservedSpots}`);
console.log(`Occupied Spots: ${occupiedSpots}`);
console.log(`Available Spots: ${availableSpots}`);


let cups = 5
while (cups>0){
    //console.log(`Cups remaining: ${cups}`)
    cups--
}
//console.log("All cups are served, machine is ready for cleaning")

let visitors = 0
while (visitors<=15){
    visitors++
    console.log(`Visitor #${visitors} viewed the website`)
}

let boxes = 75

while (boxes >= 8) {
    boxes = boxes - 8;
    console.log(`Remaining Boxes: ${boxes}`);
}

console.log("Warehouse almost empty.");
console.log(`Remaining Boxes: ${boxes}`);


const freelancerName = "Ghulam Ghous";
const hourlyRate = 25;

const hoursWorkedEachDay = [
    "Monday: 8 hours",
    "Tuesday: 6 hours",
    "Wednesday: 7 hours",
    "Thursday: 5 hours",
    "Friday: 8 hours"
];

const completedProjects = 12;
let pendingProjects = 3;

// --------------------
// Part 1 - Display Hours
// --------------------

console.log("----- Weekly Work -----");

for (let i = 0; i < hoursWorkedEachDay.length; i++) {
    console.log(hoursWorkedEachDay[i]);
}

// --------------------
// Part 2 - Calculate Total Hours
// --------------------

let totalHoursWorked = 0;

for (let i = 0; i < hoursWorkedEachDay.length; i++) {

    let hours = parseInt(hoursWorkedEachDay[i].split(":")[1]);

    totalHoursWorked += hours;
}

console.log("\nTotal Hours Worked:", totalHoursWorked);

// --------------------
// Part 3 - Earnings
// --------------------

const totalEarnings = totalHoursWorked * hourlyRate;

console.log("Total Earnings: $" + totalEarnings);

// --------------------
// Part 4 - Pending Projects
// --------------------

console.log("\n----- Completing Projects -----");

while (pendingProjects > 0) {

    console.log(`Project completed. Remaining: ${pendingProjects - 1}`);

    pendingProjects--;
}

console.log("All pending projects completed.");

// --------------------
// Part 5 - Client Follow-up
// --------------------

let followUpClients = 3;

console.log("\n----- Client Follow-up -----");

do {

    console.log("Sending follow-up email...");

    followUpClients--;

} while (followUpClients > 0);

console.log("All clients contacted.");

// --------------------
// Part 6 - Weekly Performance
// --------------------

console.log("\n----- Performance -----");

if (totalHoursWorked >= 50) {

    console.log("Excellent Week");

}
else if (totalHoursWorked >= 35) {

    console.log("Good Week");

}
else if (totalHoursWorked >= 20) {

    console.log("Average Week");

}
else {

    console.log("Needs Improvement");

}

// --------------------
// Final Summary
// --------------------

console.log("\n========== Weekly Summary ==========");

console.log("Freelancer:", freelancerName);
console.log("Hourly Rate: $" + hourlyRate);
console.log("Total Hours:", totalHoursWorked);
console.log("Total Earnings: $" + totalEarnings);
console.log("Completed Projects:", completedProjects);
console.log("Pending Projects:", pendingProjects);