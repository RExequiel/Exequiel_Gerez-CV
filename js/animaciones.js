const perfilSpinning = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const perfilTiming = {
  duration: 2000,
  iterations: 1,
}

const perfil = document.getElementById("img");

perfil.addEventListener('click', () => {
  perfil.animate(perfilSpinning, perfilTiming);
});
