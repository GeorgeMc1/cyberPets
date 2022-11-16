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