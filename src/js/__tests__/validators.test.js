import { isValidNumber } from '../validators';
import { isValidCard } from '../validators';
import { typeThisCard } from '../validators';

test('Should be false if numder length less than 13', () => {
  const result = isValidNumber('1234567');
  expect(result).toBe(false);
});

test('Should be false if numder length more than 19', () => {
  const result = isValidNumber('12345678901234567890');
  expect(result).toBe(false);
});

test('Should be true if numder length between 13 and 19', () => {
  const result = isValidNumber('1234567890123');
  expect(result).toBe(true);
});

test('Should be false if numder contains literals', () => {
  const result = isValidNumber('123ab6789A123456');
  expect(result).toBe(false);
});

test('Should be false if numder length between 13 and 19, but with space', () => {
  const result = isValidNumber('1234 5678 9012 3456 78');
  expect(result).toBe(false);
});

test('Should be true if numder length between 13 and 19, with replace space', () => {
  const result = isValidNumber('1234 5678 9012 3456 78'.replaceAll(' ', ''));
  expect(result).toBe(true);
});


test('Should be false if card not Luhn', () => {
  const result = isValidCard('475065777637037');
  expect(result).toBe(false);
});

test('Should be true if card Luhn', () => {
  const result = isValidCard('2200687826286658');
  expect(result).toBe(true);
});


test('All card numbers should be unknow', () => {
  const testMass = ['0000000000000000', '123456789012345', '35380170'];
  const result = testMass.map(typeThisCard)
  const expectedResult = ['Неизвестно', 'Неизвестно', 'Неизвестно']
  expect(result).toStrictEqual(expectedResult);
});

test('All card numbers should be Mir', () => {
  const testMass = ['2200687826286658', '2200785721919470'];
  const result = testMass.map(typeThisCard)
  const expectedResult = ['Мир', 'Мир']
  expect(result).toStrictEqual(expectedResult);
});

test('All card numbers should be Visa', () => {
  const testMass = ['4916873672921728', '4532159786822562', '4532900256293508245'];
  const result = testMass.map(typeThisCard)
  const expectedResult = ['VISA', 'VISA', 'VISA']
  expect(result).toStrictEqual(expectedResult);
});

test('All card numbers should be MasterCard', () => {
  const testMass = ['5177345635644029', '5240282159699092', '5349504139673412'];
  const result = testMass.map(typeThisCard)
  const expectedResult = ['MasterCard', 'MasterCard', 'MasterCard']
  expect(result).toStrictEqual(expectedResult);
});

test('All card numbers should be American Express', () => {
  const testMass = ['344289247606076', '343271266404733', '374812551110634'];
  const result = testMass.map(typeThisCard)
  const expectedResult = ['American Express (AMEX)', 'American Express (AMEX)', 'American Express (AMEX)'];
  expect(result).toStrictEqual(expectedResult);
});

test('All card numbers should be Discover', () => {
  const testMass = ['6011152474305813', '6011616288981860', '6011117862429680196'];
  const result = testMass.map(typeThisCard)
  const expectedResult = ['Discover', 'Discover', 'Discover']
  expect(result).toStrictEqual(expectedResult);
});

test('All card numbers should be JCB', () => {
  const testMass = ['3540404824693902', '3545743929063858', '3538017055823506945'];
  const result = testMass.map(typeThisCard)
  const expectedResult = ['JCB', 'JCB', 'JCB']
  expect(result).toStrictEqual(expectedResult);
});

test('All card numbers should be Diners Club - International', () => {
  const testMass = ['36658397553937', '36848737425322', '36645148303944'];
  const result = testMass.map(typeThisCard)
  const expectedResult = ['Diners Club - International', 'Diners Club - International', 'Diners Club - International']
  expect(result).toStrictEqual(expectedResult);
});

test('All card numbers should be Diners Club - Carte Blanche', () => {
  const testMass = ['30382680011091', '30516172575549', '30007476158919'];
  const result = testMass.map(typeThisCard)
  const expectedResult = ['Diners Club - Carte Blanche', 'Diners Club - Carte Blanche', 'Diners Club - Carte Blanche']
  expect(result).toStrictEqual(expectedResult);
});

test('All card numbers should be Maestro', () => {
  const testMass = ['6304740719907934', '6763236251170290', '6763469968611666'];
  const result = testMass.map(typeThisCard)
  const expectedResult = ['Maestro', 'Maestro', 'Maestro']
  expect(result).toStrictEqual(expectedResult);
});

test('All card numbers should be Visa Electron', () => {
  const testMass = ['4175002138894826', '4026241041260102', '4913639088255396'];
  const result = testMass.map(typeThisCard)
  const expectedResult = ['Visa Electron', 'Visa Electron', 'Visa Electron']
  expect(result).toStrictEqual(expectedResult);
});

test('All card numbers should be InstaPayment', () => {
  const testMass = ['6393787178235986', '6370088322902465', '6375686939524120'];
  const result = testMass.map(typeThisCard)
  const expectedResult = ['InstaPayment', 'InstaPayment', 'InstaPayment']
  expect(result).toStrictEqual(expectedResult);
});

test('All card numbers should be UnionPay', () => {
  const testMass = ['6250947000000014', '8171999927660000', '6250947999990000014'];
  const result = testMass.map(typeThisCard)
  const expectedResult = ['UnionPay', 'UnionPay', 'UnionPay']
  expect(result).toStrictEqual(expectedResult);
});