class pet {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hunger = 100;
    this.thirst = 100;
    this.energy = 100;
  }
  eat() {
    this.hunger += 20;
  }
  drink() {
    this.thirst += 20;
  }
  sleep() {
    this.energy -= 20;
  }
  cycle() {
    this.hunger -= 1;
    this.thirst -= 1;
    this.energy -= 1;
    this.cycle();
  }
}

class dog extends pet {
  constructor(name) {
    super(name);
  }

  walk() {
    this.hunger -= 10;
    this.health += 10;
    this.thirst -= 10;
    this.energy -= 10;
  }
}

class cat extends pet {
  constructor(name, happy) {
    super(name, happy);
    this.happy = 100;
  }
  play() {
    this.hunger -= 10;
    this.health += 10;
    this.thirst -= 10;
    this.energy -= 10;
    this.happy += 25;
  }
}