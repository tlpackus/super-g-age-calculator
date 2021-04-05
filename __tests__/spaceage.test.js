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
    expect(ageObject.ageCalc('Mercury')).toEqual(95);
    expect(ageObject.ageCalc('Venus')).toEqual(37);
    expect(ageObject.ageCalc('Mars')).toEqual(12);
    expect(ageObject.ageCalc('Jupiter')).toEqual(1);
  });
  test('should correctly calculate the users life expectancy on varying planets', () => {
    expect(ageObject.lifeExpectancyCalc('Mercury')).toEqual(416);
    expect(ageObject.lifeExpectancyCalc('Venus')).toEqual(161);
    expect(ageObject.lifeExpectancyCalc('Mars')).toEqual(53);
    expect(ageObject.lifeExpectancyCalc('Jupiter')).toEqual(8);
  });
  test('should correctly calculate the users years left to live on varying planets and text about it as well', () => {
    expect(ageObject.leftToLiveCalc('Mercury')).toEqual("You have 321 years of life remaining on Mercury");
    expect(ageObject.leftToLiveCalc('Venus')).toEqual(161);
    expect(ageObject.leftToLiveCalc('Mars')).toEqual(53);
    expect(ageObject.leftToLiveCalc('Jupiter')).toEqual(8);
  });
});