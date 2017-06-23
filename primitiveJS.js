var level = 1;

function inspireFear(level){
    level += 100;
    console.log(level); // 101
}

inspireFear(level);
console.log(level); // 1

// The interprete read the code like this
// WE PASS THE VALUE,  the parameter do not do hoisting
var level;
level = 1;

function inspiredFear(1) {
	1 += 100;
	console.log(level); // 101
}

inspiredFear();
console.log(level); // 1
