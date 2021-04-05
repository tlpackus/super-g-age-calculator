// import { TestScheduler } from 'jest';
import Age from '../src/spaceage.js';
describe('Age', () => {

  test('should correctly create an Age object', () => {
    let ageObject = new Age(23, 100);
    expect(ageObject.age).toEqual(23);
    expect(ageObject.lifeExpectancy).toEqual(100);
  });
  test('should correctly calculate the users age on varying planets', () => {
    let ageObject = new Age(23, 100);
    expect(ageObject.ageCalc('Mercury')).toEqual(95);
    expect(ageObject.ageCalc('Venus')).toEqual(37);
    expect(ageObject.ageCalc('Mars')).toEqual(12);
    expect(ageObject.ageCalc('Jupiter')).toEqual(1);
  });
  test('should correctly calculate the users life expectancy on varying planets', () => {
    let ageObject = new Age(23, 100);
    expect(ageObject.lifeExpectancyCalc('Mercury')).toEqual(416);
    expect(ageObject.lifeExpectancyCalc('Venus')).toEqual(161);
    expect(ageObject.lifeExpectancyCalc('Mars')).toEqual(53);
    expect(ageObject.lifeExpectancyCalc('Jupiter')).toEqual(8);
  });
  test('should correctly calculate the users years left to live on varying planets if they still have life left to live', () => {
    let ageObject = new Age(23, 100);
    expect(ageObject.leftToLiveCalc('Mercury')).toEqual("You have 321 years of life remaining on Mercury");
    expect(ageObject.leftToLiveCalc('Venus')).toEqual("You have 124 years of life remaining on Venus");
    expect(ageObject.leftToLiveCalc('Mars')).toEqual("You have 41 years of life remaining on Mars");
    expect(ageObject.leftToLiveCalc('Jupiter')).toEqual("You have 7 years of life remaining on Jupiter");
    let aboutTheAgeObject = new Age(100, 100);
    expect(aboutTheAgeObject.leftToLiveCalc('Mercury')).toEqual("RIP");
    expect(aboutTheAgeObject.leftToLiveCalc('Venus')).toEqual("RIP");
    expect(aboutTheAgeObject.leftToLiveCalc('Mars')).toEqual("RIP");
    expect(aboutTheAgeObject.leftToLiveCalc('Jupiter')).toEqual("RIP");
    let pastTheAgeObject = new Age(100, 23);
    expect(pastTheAgeObject.leftToLiveCalc('Mercury')).toEqual("You would have passed 321 years ago on Mercury");
    expect(pastTheAgeObject.leftToLiveCalc('Venus')).toEqual("You would have passed 124 years ago on Venus");
    expect(pastTheAgeObject.leftToLiveCalc('Mars')).toEqual("You would have passed 41 years ago on Mars");
    expect(pastTheAgeObject.leftToLiveCalc('Jupiter')).toEqual("You would have passed 7 years ago on Jupiter");
  }); 
  
});
