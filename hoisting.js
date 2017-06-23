console.log(text);
var text = 'outside';

function logIt() {
    console.log(text);
    var text = 'inside';
};

logIt();

// variable declarations are "hoisted" to the top of the current scope. 
// So our code gets interpreted as though it were:
var text 
console.log(text);
text = 'outside';
function logIt() {
	var text;
	console.log(text);
	text = 'inside';
}