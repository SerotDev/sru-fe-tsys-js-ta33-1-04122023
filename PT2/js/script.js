// Wait for the document to load and display a text in the element with id="js-notice-text" of the html document
window.onload = () =>
  (document.getElementById("js-notice-text").innerHTML =
    "Accede a la Consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)");

// Function with regex to validate if exists some date inside string wit format XX/XX/XXXX
let haveDate = (date) => {
  let regexDate = /(0[1-9]|[1-2][0-9]|3[0-1])(\/)(0[1-9]|1[0-2])\2(\d{4})/;
  return regexDate.test(date) ? "Contiene Fecha (DD/MM/YYYY)" : "No contiene Fecha (DD/MM/YYYY)";
};
// Fill variable with text with date
let testDate = "Nací el 05/04/1982 en Donostia.";
// Show if the text contains date format or not.
console.log("----------------------------------------------")
console.log("-------------- FORMATO DE FECHA --------------")
console.log("testDate: " + testDate);
console.log("testDate " + haveDate(testDate));

// Function with regex to validate if string is email: any (alfanumeric.-), 1 (@), any (alfanumeric), 2 or 3 (characters)
let isEmail = (email) => {
  let regexEmail = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  return regexEmail.test(email) ? "Es Email" : "No es Email";
};
// Array with 2 strings and check if each one is email or not
console.log("----------------------------------------------")
console.log("-------------- FORMATO DE EMAIL --------------")
let emails = ["sergidpm@hotmail.com", "test@zzzzzzx"];
emails.forEach((email) => {
  console.log("Email " + email + " : " + isEmail(email));
});

// function to replace characters inside string using regex
let escapeHTML = (text) => {
  return text.replace(/[&"<>]/g, function (match) {
    if (match === "&") {
      return "&amp;";
    } else if (match === "\"") {
      return "&quot;";
    } else if (match === "<") {
      return "&lt;";
    } else if (match === ">") {
      return "&gt;";
    }
  });
};
// Check if string is replaced or not
let text = "<code> \"Test\" & Fin  </code>";
console.log("----------------------------------------------")
console.log("--------- REEMPLAZAR CARACTERES HTML ---------")
console.log("Texto original : " + text);
console.log("Texto reemplazado : " + escapeHTML(text));

// Reverse order of a complete name
console.log("----------------------------------------------")
console.log("---------- INVERTIR ORDEN DE NOMBRE ----------")
text = "John Smith";
let reverseText = text.split(" ").reverse().join(" ").replace(" ",", ");
console.log("Nombre completo : " + text);
console.log("Nombre con orden invertido : " + reverseText);

//Delete script html tag and its content
console.log("----------------------------------------------")
console.log("--------- ELIMINAR CONTENIDO SCRIPT ----------")
text = "Contenido normal <script> Contenido Malicioso </script>";
let secureText = text.replace(/<script>.*<\/script>|<script>|<\/script>/g,"");
console.log("Contenido sin seguridad : " + text);
console.log("Contenido con seguridad: " + secureText);
