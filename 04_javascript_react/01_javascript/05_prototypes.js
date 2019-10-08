// how `this` keyword works

// animal has methods
let animal = {
    // isSleeping: false,  # when undefined
    walk() {            // #        |
        if (!this.isSleeping) { // # ! undefined == true
            alert(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};


rabbit.walk();

// modifies rabbit.isSleeping
rabbit.sleep();

rabbit.walk();
