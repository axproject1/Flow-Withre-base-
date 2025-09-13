// ===== PRELOADER JS =====
document.addEventListener("DOMContentLoaded", function() {
  const preloader = document.getElementById("preloader");
  const loaderFill = document.querySelector(".loader-fill");
  const accessBtn = document.getElementById("access-btn");

  // Revisar si el usuario ya pasó el preloader
  if(localStorage.getItem("preloaderPassed")) {
    preloader.style.display = "none"; // Oculta preloader si ya pasó
    return;
  }

  // Función para llenar la barra y redirigir
  function fillAndRedirect() {
    loaderFill.style.width = "100%"; // llenado instantáneo
    preloader.style.opacity = "0";   // efecto de desvanecimiento
    setTimeout(() => {
      preloader.style.display = "none";
      localStorage.setItem("preloaderPassed", "true"); // marcar como pasado
      window.location.href = "index.html"; // redirige a la principal
    }, 300);
  }

  // Botón Acceder
  accessBtn.addEventListener("click", fillAndRedirect);

  // Auto ocultar después de 3 segundos
  setTimeout(fillAndRedirect, 3000);
});




// Espera a que toda la página cargue
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const loaderFill = document.querySelector(".loader-fill");

  // Simular barra de carga (opcional)
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width += 2; // velocidad de carga simulada
      loaderFill.style.width = width + "%";
    }
  }, 20);

  // Ocultar el preloader después de unos segundos
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none"; // permite clicks en botones
    preloader.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 1500); // tiempo mínimo que se ve el preloader
});

// Botón "Acceder" para saltar preloader
document.getElementById("access-btn").addEventListener("click", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.pointerEvents = "none";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});
