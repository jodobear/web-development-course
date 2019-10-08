var a = ['dog', 'cat', 'hen'];
a.length; // ?




var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // ?




// iterating over array - 3 ways

for (var i = 0; i < a.length; i++) {
    console.log(a[i])
}


for (const element of a) {
    console.log(element);
}


['dog', 'cat', 'hen'].forEach(function(value, index, array) {
    console.log(value);
});




// appending an element to array:
a.push(item);




// Exercise: write a function which finds an average of an array
