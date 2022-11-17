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
        if (this.health > 0 && this.hunger > 0 && this.thirst > 0 && this.energy > 0 && this.happy > 0) {
            if (this.health > 100){
                this.health = 100;
            }
            if (this.hunger > 100){
                this.hunger = 100;
            }
            if (this.thirst > 100){
                this.thirst = 100;
            }
            if (this.energy > 100){
                this.energy = 100;
            }
            if (this.happy > 100){
                this.happy = 100;
            }
            this.health -= 1;
            this.hunger -= 1;
            this.thirst -= 1;
            this.energy -= 1;
            this.happy -= 1;
            this.updateBars();
        } else if (this.energy <= 0) {
            this.health -= 30;
            this.sleep();
            this.updateBars();
        } else {
            this.petDies();
        }
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
    petDies(){
        title.innerHTML = `${currentPet.name} died :(`;
        modalTwo.style.display = "flex";
        deathMessage.innerHTML = `${currentPet.name} died`;
        dead = true;
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
let dead = false;
let currentPet;
dogBtn.addEventListener("click", () => {
    modalOne.style.display = "flex";
    food.src = "./images/dog.eat.png";
    currentPet = new dog();
    walk.style.display = "block";
    petImage.src = "./images/dog.png"
})
guineaPigBtn.addEventListener("click", () => {
    modalOne.style.display = "flex";
    food.src = "./images/guineapig.food.png";
    currentPet = new guineaPig();
    runWheel.style.display = "block";
    poops.style.display = "block";
    petImage.src = "./images/guneapig.png"
})
catBtn.addEventListener("click", () => {
    modalOne.style.display = "flex";
    food.src = "./images/cat.eat.png";
    currentPet = new cat();
    play.style.display = "block";
    petImage.src = "./images/cat.png"
})
start.addEventListener("click", () => {
    modalOne.style.display = "none";
    currentPet.name = nameInput.value;
    title.innerHTML = `You're playing with ${currentPet.name}`;
    petChoice.style.display = "none";
    gameBox.style.display = "flex";
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
restart.addEventListener("click", () => {
    location.reload();
})