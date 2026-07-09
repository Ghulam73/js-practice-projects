// Question 1
const techArray = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

console.log(techArray[0]);
console.log(techArray[2]);
console.log(techArray[4]);
console.log(techArray.length);


// Question 2
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
console.log(cities);
cities[3] = 'San Francisco';
console.log(cities);


// Question 3
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

skills.push('Python');
console.log(skills);
skills.push('Git');
console.log(skills);
let newRemovedSkill = skills.pop();
console.log(newRemovedSkill);
let lastRemovedSkill = skills.pop();
console.log(lastRemovedSkill);
console.log(skills);

// Question 4
const customers = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
customers.unshift('Frank');
console.log(customers);
let removedCustomer = customers.shift();
console.log(customers);
console.log(removedCustomer);

// Question 5
const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const index = technologies.indexOf('React');
console.log(index);
const indexNotFound = technologies.indexOf('Python');
console.log(indexNotFound);
const indexOfNode = technologies.indexOf('Node.js');
console.log(indexOfNode);
const indexOfLaravel = technologies.includes('Laravel');
console.log(indexOfLaravel);


// Question 6
const services = ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Digital Marketing', 'SEO Optimization'];

let updatedString = console.log(services.join(' | '));

console.log(typeof services);
console.log(typeof updatedString);


// Question 7
const numbers = [10, 20, 30, 40, 50];
const slicedArray = numbers.slice(1, 4);
console.log(slicedArray);
console.log(numbers);

//Question 8
const num1 = [10, 20, 30, 40, 50];
const splicedArray = num1.splice(2, 4);
console.log(splicedArray);
console.log(num1);

const values  =  [1, 2, 3, 4, 5];
const firstResult = values.slice(0, 3); //The last index is not included in the new array, so it will return the elements at index 0, 1, and 2.
console.log(firstResult);

const secondResult = values.splice(2, 4); //The original array will be modified, and the elements at index 2, 3, and 4 will be removed from the original array.
console.log(secondResult);
console.log(values);

const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React'];
const backendSkills = ['Node.js', 'Express', 'MongoDB', 'SQL'];

const combinedSkills = frontendSkills.concat(backendSkills);
console.log(combinedSkills);

console.log(combinedSkills[5]);


const designSkills = ['UI Design', 'UX Design', 'Graphic Design'];
const developmentSkills = ['Web Development', 'Mobile App Development', 'Game Development'];
const backendSkills = ['Node.js', 'Express', 'MongoDB', 'SQL'];

const allSkills = [...designSkills, ...developmentSkills, ...backendSkills];
console.log(allSkills);

const categories = [
    "Web",
    ["Frontend", "Backend"],
    ["Mobile", ["Android", "iOS"]]
];

const newCategories = categories.flat(2);
console.log(newCategories);


const skills = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];
const userName = 'John Doe';

const user = {
    name: 'Ghulam Ghous'
}

console.log(Array.isArray(skills));
console.log(Array.isArray(userName));
console.log(Array.isArray(user));

const username = 'Ghulam Ghous';
const newUsername = Array.from(username);
console.log(newUsername);
