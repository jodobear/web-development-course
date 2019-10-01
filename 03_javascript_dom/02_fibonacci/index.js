function fibonacciSeries() {
    var a = 1;
    var b = 1;

    setInterval(function() {
        console.log(a);
        var c = a + b;
        a = b;
        b = c;
        // todo: simplify with destructuring
    }, 1000);
}
