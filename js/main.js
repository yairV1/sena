// Partículas verdes en el botón de efectos (si usas uno con id="btn")
const button = document.getElementById("btn");
if (button) {
  button.addEventListener("mouseenter", () => {
    const particles = 80;
    for (let i = 0; i < particles; i++) {
      const part = document.createElement("div");
      part.classList.add("particle");

      part.style.left = `${button.offsetLeft + button.offsetWidth / 2}px`;
      part.style.top = `${button.offsetTop + button.offsetHeight / 2}px`;
      part.style.backgroundColor = "#6BBE2E";

      document.body.appendChild(part);

      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 1) * 200;
      const rotate = Math.random() * 360;

      part.animate([
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`, opacity: 0 }
      ], {
        duration: 800,
        easing: "ease-out",
        fill: "forwards"
      });

      setTimeout(() => part.remove(), 800);
    }

    button.style.visibility = "hidden";
  });
}

// Botón modo oscuro LED dinámico
const toggleBtn = document.getElementById('modo-oscuro-btn');
const icono = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
  icono.classList.toggle('fa-moon');
  icono.classList.toggle('fa-sun');
});
