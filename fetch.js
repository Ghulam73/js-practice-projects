console.log("Starting request...");

fetch("https://api.github.com/users/ghulam73")
  .then(function (response) {
    console.log("Response received:", response.status);

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    return response.json();
  })
  .then(function (user) {
    console.log("User data:", user);
    console.log("Name:", user.name);
    console.log("Email:", user.followers);
    console.log("City:", user.login);
  })
  .catch(function (error) {
    console.error("Fetch failed:", error);
  });