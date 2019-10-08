function makeAdder(a) {
    return function(b) {
        return a + b;
    };
}

let add5 = makeAdder(5);
let result = add5(6);

let diffWay = makeAdder(5)(6);
