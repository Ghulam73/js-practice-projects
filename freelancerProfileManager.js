const freeLancerId = Symbol("id");

const freelancer = {
    [freeLancerId] : (87),
    name: "Ghulam Ghous",
    email: "ghulam.ghous2002@gmail.com",
    profession: "Software Developer",
    hourlyRate: "30$",
    isAvailable: true,
    skills: ["JS", "React", "Typescript", "MongoDB"],
    address: {
        city: "Lahore",
        country: "Pakistan"
    },
    socialProfiles: {
        github: "github.com",
        linkedin: "linkedin.com"
    },
    
    greet() {
        console.log(`The name of the freelancer is ${this.name}`);
    }
}
const work = {
    experience: "6 Years",
    company:  "Airvon"
}

console.log(freelancer.name); 
console.log(freelancer['email']);
console.log(freelancer[freeLancerId]);
console.log(freelancer.address.city);
console.log(freelancer.socialProfiles.github);

freelancer.hourlyRate = "45$";
freelancer.isAvailable = false;


freelancer.skills.push("Node.JS"); 

freelancer.phone = "+923219463272";

freelancer.greet();

const combinedObject = {...freelancer, ...work};
//console.log(combinedObject);

console.log(Object.values(freelancer));
console.log(Object.entries(work));

console.log(freelancer.hasOwnProperty("email"));
console.log(freelancer.hasOwnProperty("salary"));


let {name:userName, profession:working, hourlyRate:rate} = freelancer;
console.log(userName);
console.log(working);
console.log(rate);

const projects = [
    { id: "2", projectName: "TomFox", price: "450$", completionStatus: "done" },
    { id: "3", projectName: "Codexify Solutions", price: "500$", completionStatus: "done" },
    { id: "7", projectName: "MFV", price: "5000$", completionStatus: "done" }
];

console.log(projects[1].price);


console.table(freelancer);