export default class Age {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }
  ageCalc(planet) {
    if (planet==="Mercury") {
      return Math.floor(this.age/.24);
    }
    else if (planet==="Venus") {
      return Math.floor(this.age/.62);
    }
    else if (planet==="Mars") {
      return Math.floor(this.age/1.88);
    }
    else {
      return Math.floor(this.age/11.86);
    }
  }
  lifeExpectancyCalc(planet) {
    if (planet==="Mercury") {
      return Math.floor(this.lifeExpectancy/.24);
    }
    else if (planet==="Venus") {
      return Math.floor(this.lifeExpectancy/.62);
    }
    else if (planet==="Mars") {
      return Math.floor(this.lifeExpectancy/1.88);
    }
    else {
      return Math.floor(this.lifeExpectancy/11.86);
    }
  }
  leftToLiveCalc(planet) {
    if (this.age < this.lifeExpectancy) {
      return "You have " + ((Math.floor(this.lifeExpectancyCalc(`${planet}`))) - (Math.floor(this.ageCalc(`${planet}`)))) + " years of life remaining on " + `${planet}`;
    }
    else if (this.age === this.lifeExpectancy) {
      return "RIP";
    }
    else {
      return "You would have passed " + ((Math.floor(this.ageCalc(`${planet}`))) - (Math.floor(this.lifeExpectancyCalc(`${planet}`)))) + " years ago on " + `${planet}`;
    }
  }
}

