class pet {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.hunger = 100;
        this.thirst = 100;
        this.tired = 0;
    }
    eat() {
        this.hunger += 20;
    }
    drink() {
        this.thirst += 20;
    }
    sleep() {
        this.tired -= 20;
    }
    cycle() {
        this.hunger -= 1;
        this.thirst -= 1;
        this.tired += 1;
        this.cycle();
    }
}

class guineaPig extends pet {
    constructor(name) {
    
    super(name);
    }
}
    
    runWheel() {
    this.health += 10;
    this.hunger -= 10;
    this.energy -= 20;
    this.thirst -= 20;
    // console.log(`${this.name} is happy`);
    return this;
    }

    poops() {
        this.health += 10;
        this.hunger -= 30;
        this.thirst -= 10;
        // console.log(`${this.name} is relieved.`);
        return this;
        }