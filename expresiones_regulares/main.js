import './style.css';

// Define la función comprobarFrase
function comprobarFrase() {
  const cadena = document.getElementById('fraseInput').value;
  const expresionRegular = /[01]+/;
  const resultadoParrafo = document.getElementById('resultado');

  if (expresionRegular.test(cadena)) {
    resultadoParrafo.textContent = 'Si hizo match';
  } else {
    resultadoParrafo.textContent = 'No hizo match';
  }
}

const comprobarButton = document.getElementById('comprobarButton');
comprobarButton.addEventListener('click', comprobarFrase);

// Agrega un elemento <p> para mostrar el resultado y dale un id
const resultadoParrafo = document.createElement('p');
resultadoParrafo.id = 'resultado';
document.body.appendChild(resultadoParrafo);

