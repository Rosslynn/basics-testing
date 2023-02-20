const storedBooks = {
  Mujeres: 'Charles Bukowski',
  'El principe': 'Nicolás Maquiavelo',
  'Cien años de soledad': 'Gabriel García Márquez',
  default(name) {
    return `No se encontró el autor del libro ${name}`;
  },
};

export function getGreeting(name) {
  return `Hola ${name}. ¿Cómo estás el día de hoy?`;
}

// Se podría añadir validación para que los valores enviados como argumento sean numeros
// y en caso de que no lo sean arrojar un error.
export function addTwoNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

export function getAuthorByBookName(name) {
  return storedBooks[name] || storedBooks.default();
}
