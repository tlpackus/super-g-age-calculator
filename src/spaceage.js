export default class Age {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }
  ageCalc(planet) {
    if (planet==="mercury") {
      return Math.floor(this.age/.24);
    }
    else if (planet==="venus") {
      return Math.floor(this.age/.62);
    }
    else if (planet==="mars") {
      return Math.floor(this.age/1.88);
    }
    else if (planet==="jupiter") {
      return Math.floor(this.age/11.86);
    }
  }
  lifeExpectancyCalc(planet) {
    if (planet==="mercury") {
      return Math.floor(this.lifeExpectancy/.24);
    }
    else if (planet==="venus") {
      return Math.floor(this.lifeExpectancy/.62);
    }
    else if (planet==="mars") {
      return Math.floor(this.lifeExpectancy/1.88);
    }
    else if (planet==="jupiter") {
      return Math.floor(this.lifeExpectancy/11.86);
    }
  }
  leftToLiveCalc(planet) {

  }
}
