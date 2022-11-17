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
        this.health += 10;
        this.hunger += 20;
        this.happy += 5;
        this.energy += 5;
        return this;
    }
    drink() {
        this.health += 5;
        this.thirst += 20;
        this.happy += 5;
        this.energy += 5;
        return this;
    }
    sleep() {
        this.energy += 20;
        return this;
    }
    cycle() {
        this.health -= 1;
        this.hunger -= 1;
        this.thirst -= 1;
        this.energy -= 1;
        this.happy -= 1;
        this.updateBars();
        setTimeout(() => {
            this.cycle();
        }, 200);
        return this;
    }
    updateBars(){
        health.value = this.health;
        hunger.value = this.hunger;
        thirst.value = this.thirst;
        energy.value = this.energy;
        happy.value = this.happy;
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
dogBtn.addEventListener("click", () => {
    let name = prompt("What would you like to call your dog?", "bill");
    let currentPet = new dog(name);
    currentPet.cycle();
})
walk.addEventListener("click", () => {
    currentPet.walk();
})
eat.addEventListener("click", () => {
    currentPet.eat();
})
drink.addEventListener("click", () => {
    currentPet.drink();
})
sleep.addEventListener("click", () => {
    currentPet.sleep();
})
runWheel.addEventListener("click", () => {
    currentPet.runWheel();
})
play.addEventListener("click", () => {
    currentPet.play();
})
poops.addEventListener("click", () => {
    currentPet.poops();
})