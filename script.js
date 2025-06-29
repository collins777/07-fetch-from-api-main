// Select the button and joke container elements from the HTML
const jokeBtn = document.getElementById("joke-btn");
const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");

// Add an event listener to the button
jokeBtn.addEventListener("click", function () {
  console.log("Getting a joke...");

  // Fetch a random programming joke from the Official Joke API
  fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then(function (response) {
      // Convert the response to JSON format
      return response.json();
    })
    .then(function (joke) {
      // Display the programming joke on the page
      setup.textContent = joke[0].setup;
      punchline.textContent = joke[0].punchline;
    });
});
