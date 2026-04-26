function addComment() {
  const nome = document.getElementById("nome").value;
  const texto = document.getElementById("comentario").value;

  const div = document.createElement("div");
  div.innerHTML = `<strong>${nome}</strong>: ${texto}`;

  document.getElementById("lista-comentarios").appendChild(div);
}