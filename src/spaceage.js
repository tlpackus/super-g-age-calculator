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
    else if (planet==="Jupiter") {
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
    else if (planet==="Jupiter") {
      return Math.floor(this.lifeExpectancy/11.86);
    }
  }
  leftToLiveCalc(planet) {
    if (this.age < this.lifeExpectancy) {
      return "You have " + ((Math.floor(this.lifeExpectancy/.24)) - (Math.floor(this.age/.24))) + " years of life remaining on " + `${planet}`;
    }
    else if (this.age = this.lifeExpectancy) {
      return "RIP";
    }
    else {
      return "You would have died " + ((Math.floor(this.age/.24)) - (Math.floor(this.lifeExpectancy/.24))) + " years ago on Mercury";
    }
  }
}

