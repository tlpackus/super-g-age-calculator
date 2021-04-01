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
  test('should correctly calculate the users age on varying planets', () => {
    expect(ageObject.ageCalc('mercury')).toEqual(95);
    expect(ageObject.ageCalc('venus')).toEqual(37);
    expect(ageObject.ageCalc('mars')).toEqual(12);
    expect(ageObject.ageCalc('jupiter')).toEqual(1);
  });
  test('should correctly calculate the users life expectancy on varying planets', () => {
    expect(ageObject.lifeExpectancyCalc('mercury')).toEqual(416);
    expect(ageObject.lifeExpectancyCalc('venus')).toEqual(161);
    expect(ageObject.lifeExpectancyCalc('mars')).toEqual(53);
    expect(ageObject.lifeExpectancyCalc('jupiter')).toEqual(8);
  });
  test('should correctly calculate the users years left to live on varying planets and text about it as well', () => {
    expect(ageObject.leftToLiveCalc('mercury')).toEqual(416);
    expect(ageObject.leftToLiveCalc('venus')).toEqual(161);
    expect(ageObject.leftToLiveCalc('mars')).toEqual(53);
    expect(ageObject.leftToLiveCalc('jupiter')).toEqual(8);
  });
});