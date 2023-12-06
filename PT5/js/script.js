//funcion para refrescar la imagen grande y su descripción con los datos del elemento clicado
const miniaturasOnClick = (e) => {
  document.getElementById("foto-grande").src = e.target.src;
  document.getElementById("descripcion").textContent = e.target.alt;
};

//añadimos evento onClick a cada una de las miniaturas
let miniaturas = document.getElementById("miniaturas").childNodes;
for (var i = 0; i < miniaturas.length; i++) {
  if (miniaturas[i].nodeName.toLowerCase() == "img") {
    miniaturas[i].addEventListener("click", miniaturasOnClick);
  }
}
