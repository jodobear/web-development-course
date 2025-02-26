class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed += speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }
}

// Inherit from Animal by specifying "extends Animal"
class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }

    hide() {
        alert(`${this.name} hides!`);
    }

    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}

let whiteRabbit = new Rabbit("White Rabbit"); //creates an instance of Class Rabbit

whiteRabbit.run(5); // White Rabbit runs with speed 5.
whiteRabbit.hide(); // White Rabbit hides!



// extends and super
