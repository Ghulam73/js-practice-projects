const frontEndSkills = ['HTML', 'CSS', 'JavaScript'];
const backEndSkills = ['Node.js', 'Express', 'MongoDB'];

const additionalSkills = [
    'Git',
    ['Github', 'Gitlab'],
    ['Deployment', ['Vercel', 'Netlify']]
];

// First and last frontend skills
console.log(frontEndSkills[0]);
console.log(frontEndSkills[frontEndSkills.length - 1]);

// Add skills
frontEndSkills.push('React');
console.log(frontEndSkills);

frontEndSkills.unshift('Responsive Design');
console.log(frontEndSkills);

// Remove last skill
const removedFrontEndSkill = frontEndSkills.pop();
console.log(removedFrontEndSkill);

// Search
console.log(frontEndSkills.includes('JavaScript'));
console.log(frontEndSkills.indexOf('CSS'));

// Join into a string
const modifiedFrontendSkills = frontEndSkills.join(' | ');
console.log(modifiedFrontendSkills);

// Slice does not change the original array
const slicedBackendSkills = backEndSkills.slice(0, 2);
console.log(slicedBackendSkills);
console.log(backEndSkills);

// Separate test array for splice
const backendSkillsTest = ['Node.js', 'Express', 'MongoDB'];
const splicedBackendSkills = backendSkillsTest.splice(0, 2);

console.log(splicedBackendSkills);
console.log(backendSkillsTest);

// Combine arrays
const combinedSkills = frontEndSkills.concat(backEndSkills);
console.log(combinedSkills);

const allSkills = [...frontEndSkills, ...backEndSkills];
console.log(allSkills);

// Flatten nested array
const additionalSkillsFlattened = additionalSkills.flat(2);
console.log(additionalSkillsFlattened);

// Check whether it is an array
const isFlattenedSkillsArray =
    Array.isArray(additionalSkillsFlattened);

console.log(isFlattenedSkillsArray);

// Convert name into an array
const name = 'Ghulam Ghous';
const nameArray = Array.from(name);

console.log(nameArray);