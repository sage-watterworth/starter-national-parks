const descriptions = document.querySelectorAll(".description-display");



  // Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener

nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("You clicked the name sorter");
  });


  nameSorter.addEventListener("click", (event) => {
    event.preventDefault();

    // 1.  Get the main element
    const main = document.querySelector("main");

    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");

    // 3. Empty the main element
    main.innerHTML = "";

    // 4. Create an array
const parksArray = Array.from(parksList);

// 5. Sort the array
parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});

console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");
