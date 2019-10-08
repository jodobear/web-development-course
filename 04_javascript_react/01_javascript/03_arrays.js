var a = ['dog', 'cat', 'hen'];
console.log(a.length); // ?




var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
console.log(a.length); // ?




// iterating over array - 3 ways

for (var i = 0; i < a.length; i++) {
    console.log(a[i])
}


for (const element of a) {
    console.log(element);
}


['dog', 'cat', 'hen'].forEach(function(value, index, array) { //value is current value
    console.log(value, index, array);
});




// appending an element to array:
console.log(a.push(item));




// Exercise: write a function which finds an average of an array
