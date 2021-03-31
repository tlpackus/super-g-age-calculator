// import { TestScheduler } from 'jest';
import Age from './../src/spaceage.js';
describe('Age', () => {
  let ageObject;
  beforeEach(() => {
    ageObject = new Age(23, 100);
  });
  test('should correctly create an Age object', () => {
    expect(ageObject.age).toEqual(23);
    expect(ageObject.lifeExpectancy).toEqual(100);
  });
});