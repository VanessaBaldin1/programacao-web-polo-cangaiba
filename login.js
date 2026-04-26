function login() {
  const usuario = document.getElementById("usuario").value.toLowerCase();
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  // 👩‍🎓 Usuários cadastrados
  const usuarios = {
    nayara: "nay123",
    ise: "ise123",
    dani: "dani123",
    vanessa: "prof123",
  };

  if (usuarios[usuario] && usuarios[usuario] === senha) {
    document.getElementById("login").style.display = "none";
    document.getElementById("app").classList.remove("hidden");

    // 👋 Mostrar nome no site
    const nomeFormatado = usuario.charAt(0).toUpperCase() + usuario.slice(1);
    document.getElementById("user-name").textContent =
      "Bem-vinda, " + nomeFormatado;
  } else {
    erro.textContent = "Usuário ou senha incorretos";
  }
}

function logout() {
  // limpa campos
  document.getElementById("usuario").value = "";
  document.getElementById("senha").value = "";

  // volta para tela de login
  document.getElementById("app").classList.add("hidden");
  document.getElementById("login").style.display = "flex";

  // limpa nome exibido
  document.getElementById("user-name").textContent = "";
}
