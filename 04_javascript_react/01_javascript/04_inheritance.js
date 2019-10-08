let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    // __proto__: animal  # another way to define inheritance.
};

rabbit.__proto__ = animal; //rabbit object should extend it's property to animal object if it doesn't find it in itself, it will inherit the property within itself.

console.log(rabbit.eats); // ?
console.log(rabbit.jumps); // ?


// we can iterate over all properties, including inherited:


for(let prop in rabbit) {
    console.log(prop);

    // checking if property belongs directly to object:
    console.log(rabbit.hasOwnProperty(prop));
}