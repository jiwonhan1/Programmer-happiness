export class Programmer {
  constructor(temp) {
    if(temp < 400.48) {
      this.initalHappiness = 60;
    } else {
      this.initalHappiness = 90;
    }
    this.initalHappiness;
    this.hunger = (this.initalHappiness/3);
    this.social = (this.initalHappiness/3);
    this.work = (this.initalHappiness/3);
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
      } else {
        this.hunger = this.hunger - 1;
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
    this.hunger = (this.initalHappiness/3);
  }

  socialize() {
    this.social = (this.initalHappiness/3);
  }

  relax() {
    this.work = (this.initalHappiness/3);
  }
}