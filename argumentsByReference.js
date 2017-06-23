var myArray = ['Cristina', 'Carlos'];

function addMoreNames(myArray) { // Passing an Objetc(array) by reference
	myArray.push('Dani'); // changes you make to the object in 
	myArray.push('Manuel'); // the function persist after the function 
	myArray.push('Ingrid'); // is done running.
}

addMoreNames(myArray);
console.log(myArray); // ["Cristina", "Carlos", "Dani", "Manuel", "Ingrid"]

// Everything else is an object in JavaScript (functions, arrays, Date() values, etc). 