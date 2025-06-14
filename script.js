// 🌈 Animación de entrada suave para el contenedor principal
window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  
  // Estado inicial
  container.style.opacity = '0';
  container.style.transform = 'translateY(20px)';
  
  // Aplicar transición después de un breve delay
  setTimeout(() => {
    container.style.transition = 'all 1s ease';
    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  }, 100);

  // Mensaje de consola con flow
  console.log("✨ ¡Landing 30 Days of Code cargada con flow geekgirl y Patsy a los pies!");
});
