// Animación de entrada suave para el contenedor
window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  container.style.opacity = '0';
  container.style.transform = 'translateY(20px)';

  setTimeout(() => {
    container.style.transition = 'all 1s ease';
    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  }, 100);

  console.log("✨ ¡Landing 30 Days of Code cargada con flow geekgirl!");
});
/* 👇 Estas líneas son necesarias para la animación del script.js */
.container {
  opacity: 0;              /* Empieza invisible */
  transform: translateY(20px); /* Posición inicial animada */
}
