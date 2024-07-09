let secretNum = 0;
console.log(secretNum);

let intentos = 0;
let listaNumSorteado = [];
let numMax = 10;

function asignarTextElement (element, text) {
  let elementHTML = document.querySelector(element);
  elementHTML.innerHTML = text;
}

function verificarIntento() {
  let numDeUser = parseInt(document.getElementById('valorUser').value);

  console.log(secretNum);
  if (numDeUser === secretNum) {
    asignarTextElement('p', `Has acertado el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (numDeUser > secretNum) {
      asignarTextElement('p', 'El número secreto es menor');
    } else {
      asignarTextElement('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector('#valorUser').value = '';
}


function generateSecretNum() {
  let numGenerate = Math.floor(Math.random() * numMax) + 1;
  console.log(numGenerate);
  console.log(listaNumSorteado);

  // Si ya se sorteo todos los numeros
  if (listaNumSorteado.length === numMax) {
    asignarTextElement('p', 'Se han sorteado todos los números, reinicia el juego');
  }

  // Si num generado está en la incluido en la lista:
  if (listaNumSorteado.includes(numGenerate)) {
    return generateSecretNum();
  } else {
    listaNumSorteado.push(numGenerate);
    return numGenerate;
  }
}

function condicionesIniciales() {
  asignarTextElement('h1', 'Juego del número secreto'); // Cambia el contenido del elemento h1
  asignarTextElement('p', `Indica un número entre 1 y ${numMax}`); // Cambia el contenido del elemento p
  secretNum = generateSecretNum();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();

  condicionesIniciales();
  document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
