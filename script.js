class pet {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.hunger = 100;
        this.thirst = 100;
        this.energy = 100;
        this.happy = 100;
    }
    eat() {
        this.hunger += 20;
        this.happy += 10;
        return this;
    }
    drink() {
        this.thirst += 20;
        this.happy += 10;
        return this;
    }
    sleep() {
        this.energy -= 20;
        return this;
    }
    cycle() {
        this.hunger -= 1;
        this.thirst -= 1;
        this.energy -= 1;
        this.happy -= 1;
        setTimeout(() => {
            this.cycle();
        }, 200);
        return this;
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
        this.happy += 25;
        return this;
    }
}
class cat extends pet {
    constructor(name) {
        super(name);
    }
    play() {
        this.hunger -= 10;
        this.health += 10;
        this.thirst -= 10;
        this.energy -= 10;
        this.happy += 25;
        return this;
    }
}
class guineaPig extends pet {
    constructor(name) {
        super(name);
    }
    runWheel() {
        this.health += 10;
        this.hunger -= 10;
        this.energy -= 20;
        this.thirst -= 20;
        this.happy += 10;
        // console.log(`${this.name} is happy`);
        return this;
    }
    poops() {
        this.health += 10;
        this.hunger -= 30;
        this.thirst -= 10;
        this.happy += 10;
        // console.log(`${this.name} is relieved.`);
        return this;
    }
}