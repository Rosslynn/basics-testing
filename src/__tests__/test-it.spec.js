import { addTwoNumbers, getGreeting } from '../utils';

test('La raíz cuadrada de 16 debería ser 4', () => {
  // Arrange
  const expectedResult = 4;

  // Act
  const result = Math.sqrt(16);

  // Assert
  expect(result).toBe(expectedResult);
});

it('addTwoNumbers debería devolver la sumatoria de 2 numeros si estos son validos', () => {
  // Act
  const firstNumber = 2;
  const secondNumber = 3;
  const expectedSum = firstNumber + secondNumber;

  // Arrange
  const sum = addTwoNumbers(firstNumber, secondNumber);

  // Assert
  expect(sum).toBe(expectedSum);
});

test('getGreeting debería devolver un saludo si se le envía un nombre valido como argumento', () => {
  // Act
  const name = 'Ernest Hemingway';
  const expectedGreeting = `Hola ${name}. ¿Cómo estás el día de hoy?`;

  // Arrange
  const greeting = getGreeting(name);

  // Assert
  expect(greeting).toBe(expectedGreeting);
});

it('getAuthorByBookName debería devolver el nombre del autor si se le envía el nombre de un libro guardado', () => {
  // TODO: Implementar test
});

it('getAuthorByBookName debería devolver un mensaje por defecto si se le envía el nombre de un libro NO guardado', () => {
  // TODO: Implementar test
});
