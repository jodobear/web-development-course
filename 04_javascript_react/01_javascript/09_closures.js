function makeAdder(a) {
    return function(b) {
        return a + b;
    };
}

add5 = makeAdder(5);
