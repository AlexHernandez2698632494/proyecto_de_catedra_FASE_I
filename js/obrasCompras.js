const abrir_cta = document.getElementById('abrir_cta');
const modal_container = document.getElementById('modal_container');
const modal_close = document.getElementById('modal_close');

abrir_cta.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

modal_close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});