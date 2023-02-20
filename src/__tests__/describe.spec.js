const car = {
  engine: {
    willExplode: false,
    itSoundsNice: true,
  },
  tire: {
    isItNonSlip: true,
  },
  chassis: {
    isRGB: true,
  },
  windshield: {
    isAntiAK47: true,
  },
  seats: {
    giveMassages: true,
    canRecline: true,
  },
};

describe('Carro', () => {
  describe('Motor', () => {
    test('Cuando enciende el coche el motor NO debería explotar', () => {
      expect(car.engine.willExplode).toBe(false);
    });

    test('Debería sonar bonito', () => {
      expect(car.engine.itSoundsNice).toBe(true);
    });
  });

  describe('Neumáticos', () => {
    test('El neumático debería ser antideslizante', () => {
      expect(car.tire.isItNonSlip).toBe(true);
    });
  });

  describe('Chasis', () => {
    test('Debería ser RGB para mayor FPS', () => {
      expect(car.chassis.isRGB).toBe(true);
    });
  });

  describe('Parabrisas', () => {
    test('Debería aguantar balas de una AK-47', () => {
      expect(car.windshield.isAntiAK47).toBe(true);
    });
  });

  describe('Asientos', () => {
    test('Deberían dar masajes', () => {
      expect(car.seats.giveMassages).toBe(true);
    });

    test('Se deberían poder reclinar', () => {
      expect(car.seats.canRecline).toBe(true);
    });
  });
});
