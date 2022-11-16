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
        this.energy += 20;
    }
    cycle() {
        this.hunger -= 1;
        this.thirst -= 1;
        this.tired += 1;
        setTimeout(() => {
            this.cycle();
        }, 200);
    }
}