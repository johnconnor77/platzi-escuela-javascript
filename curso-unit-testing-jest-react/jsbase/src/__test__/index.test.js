const randomStrings = require('../index');



describe('Probar Funcionalidades de randomString', () => {
  test('Probar la funcionalidad', () => {
    expect(typeof (randomStrings())).toBe('string')
  });
  test('Comprobar que no existe una ciudad', () => {
    expect(randomStrings()).not.toMatch(/Cordoba/)
  });
} )