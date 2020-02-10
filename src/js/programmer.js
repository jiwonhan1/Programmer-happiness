export class Programmer {
  constructor() {
    this.hunger = 20;
    this.social = 20;
    this.work = 20;
    this.happiness;
  }
  
  getHappiness() {
    return this.happiness;
  }
  hungerDrainPerSecond() {
    if(this.hunger <= 0) {
      setInterval(() => {
        this.hunger -= 2;
      }, 1000)
    } else {
      setInterval(() => {
        this.hunger--;
      }, 1000)
    }
  }

  socialDrainPerSecond() {
    if(this.social <= 0) {
      setInterval(() => {
        this.social -= 2;
      }, 1000)
    } else {
    setInterval(() => {
      this.social--;
    }, 1000)
  }
}

  workDrainPerSecond() {
    if(this.work <= 0) {
      setInterval(() => {
        this.work -= 2;
      }, 1000)
    } else {
    setInterval(() => {
      this.work--;
    }, 1000)
  }
}

  happiness() {
    setInterval(() => {
      this.happiness = this.work + this.social + this.hunger;
    }, 1);
  }
  feed() {
    this.hunger += 20;
  }

  socialize() {
    this.social = 20;
  }

  relax() {
    this.work = 20;
  }
}