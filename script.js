document.addEventListener("DOMContentLoaded", () => {

  // 🌙 THEME TOGGLE (dark/light simples)
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  }

  window.toggleTheme = function () {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // ✨ ANIMAÇÃO DE APARECER AO ROLAR
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));

  // 📅 DESTAQUE "AULA DE HOJE" (quinta-feira)
  const today = new Date().getDay(); // 4 = quinta
  if (today === 4) {
    const aulaHoje = document.querySelector(".destaque");
    if (aulaHoje) {
      aulaHoje.classList.add("highlight-today");
    }
  }

  // 🔘 FEEDBACK DE CLIQUE EM BOTÕES
  const buttons = document.querySelectorAll("button, .btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.add("clicked");

      setTimeout(() => {
        btn.classList.remove("clicked");
      }, 200);
    });
  });


  // mostrar botão quando rolar
const scrollBtn = document.getElementById("scrollTopBtn");

// mostrar/ocultar botão ao rolar
window.addEventListener("scroll", () => {
  if (!scrollBtn) return;

  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// clique do botão
if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
});