new Promise(function (resolve, reject) {
  let isEmailVerified = false;
  if (isEmailVerified) {
    resolve("Email Verification Succesful!");
  } else {
    reject(new Error("Email verification failed!"));
  }
})
  .then(function (message) {
    console.log(message);
    console.log("Verification Successful");
  })
  .catch(function (error) {
    console.log(error.message);
  });

let cartPrice = 2500;
new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (cartPrice > 0) {
      resolve("Order Placed Successfully!");
    } else {
      reject(new Error("Your cart is empty"));
    }
  }, 2000);
})
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.log(error.message);
  });

let paymentAmount = 15000;
let accountBalance = 20000;
let paymentMethod = "bank";

new Promise((resolve, reject) => {
  if (paymentAmount <= 0) {
    reject(new Error("Payment amount must be greater than zero."));
  } else if (accountBalance < paymentAmount) {
    reject(new Error("Insufficient account balance."));
  } else if (paymentMethod !== "bank" && paymentMethod !== "card") {
    reject(new Error("Invalid payment method."));
  } else {
    resolve(
      `${paymentAmount} payment processed successfully using ${paymentMethod}.`,
    );
  }
})
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.message);
  });

let applicantName = "Ghulam";
let yearsOfExperience = 2;
let hasResume = true;
let positionOpen = true;

new Promise((resolve, reject) => {
  if (!applicantName) {
    reject(new Error("Applicant Name is missing"));
  } else if (!hasResume) {
    reject(new Error("Applicant resume is not attached"));
  } else if (!positionOpen) {
    reject(new Error("The specific position is closed. Check again later!!!"));
  } else if (yearsOfExperience < 1) {
    reject(
      new Error(
        "Applicants experience doesnot match with the job description.",
      ),
    );
  } else {
    resolve(`Application for ${applicantName} is submitted successfully!`);
  }
})
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.log(error.message);
  });

let projectName = "Codexify Solutions";
let buildPassed = true;
let testsPassed = true;
let serverAvailable = true;
let deploymentStatus = "Deploying";

new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (!buildPassed) {
      reject(new Error("Build Failed. Please check the build logs"));
    } else if (!testsPassed) {
      reject(new Error("Project doesnot pass the tests"));
    } else if (!serverAvailable) {
      reject(new Error("Deployment server not available"));
    } else {
      resolve(`${projectName} : Deployment Successful`);
    }
  }, 3000);
})
  .then((message) => {
    deploymentStatus = "Successful";
    console.log(message);
  })
  .catch((error) => {
    deploymentStatus = "Failed";
    console.log(error.message);
  });

let username = "ali";
let password = "12345";

function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "ghulam" && password === "12345") {
        resolve(`Login successful! Welcome, ${username}`);
      } else {
        reject(new Error("Login Failed! Invalid Credentials"));
      }
    }, 2000);
  });
}

async function handleLogin() {
  try {
    let message = await loginUser(username, password);
    console.log(message);
  } catch (error) {
    console.log(error.message);
  }
}

handleLogin();
