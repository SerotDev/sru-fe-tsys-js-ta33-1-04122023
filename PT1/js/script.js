// Wait for the document to load and display a text in the element with id="js-notice-text" of the html document
window.onload = () => document.getElementById("js-notice-text").innerHTML = "Accede a la Consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)";

// Function to get a random number between 1 to 6
let diceRoll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

// Array to store the repetitions of the sum of two dice rolls (2 to 12) so pos 0 to 10
let result = [0,0,0,0,0,0,0,0,0,0,0];

// Sum the two roll dices and increment by 1 the correspondent position to each addition
let auxResult;
for (let i = 0; i < 36000; i++) {
  result[(diceRoll()+diceRoll())-2]++; //substract 2 because pos 0 = sum reult 2
}

// Displays the counter of the sums via console.
for (let i = 0; i < result.length; i++) {
  console.log("Las sumas con resultado " + (i+2) + " han salido " + result[i] + " veces.");
}
