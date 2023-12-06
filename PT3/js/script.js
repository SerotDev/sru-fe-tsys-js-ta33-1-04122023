window.onload = () => {
  //1rst paragraph
  document.getElementById("paragraph").addEventListener("click", () => {
    alert("Has clicado el primer parágrafo!");
  });

  //paragraphs in table 1
  let eventListenerTable1 = () => {
    alert("Has clicado un parrafo de la tabla 1!");
  };
  document
    .getElementById("table-1")
    .children[0].children[0].addEventListener("click", eventListenerTable1);
  document
    .getElementById("table-1")
    .getElementsByTagName("td")[0]
    .getElementsByTagName("p")[0]
    .addEventListener("click", eventListenerTable1);

  //paragraphs in table 2
  let eventListenerTable2 = () => {
    alert("Has clicado un parrafo de la tabla 2!");
  };
  document
    .getElementById("table-2")
    .children[0].children[0].addEventListener("click", eventListenerTable2);
  document
    .getElementById("table-2")
    .getElementsByTagName("td")[0]
    .getElementsByTagName("p")[0]
    .addEventListener("click", eventListenerTable2);
};
