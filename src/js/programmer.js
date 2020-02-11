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

  getHunger() {
    return this.hunger;
  }

  getSocial() {
    return this.social;
  }

  getWork() {
    return this.work;
  }

  hungerDrainPerSecond() {
    setInterval(() => {
      if(this.hunger <= 0) {
        this.hunger = this.hunger - 2;
        console.log(this.hunger + " hunger")
      } else {
        this.hunger = this.hunger - 1;
        console.log(this.hunger + " hunger")
      }
    },1000);
  }

  socialDrainPerSecond() {
    setInterval(() => {
      if(this.social <= 0) {
        this.social = this.social - 2;
      } else {
        this.social = this.social - 1;
      }
    },1000);
}

  workDrainPerSecond() {
    setInterval(() => {
      if(this.work <= 0) {
        this.work = this.work - 2;
      } else {
        this.work = this.work - 1;
      }
    },1000);
}

  totalHappiness() {
    setInterval(() => {
      this.happiness = this.work + this.social + this.hunger;
    }, 1);
  }
  feed() {
    this.hunger = 20;
  }

  socialize() {
    this.social = 20;
  }

  relax() {
    this.work = 20;
  }
}