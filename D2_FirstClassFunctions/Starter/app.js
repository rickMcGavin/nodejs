// Your Javascript Code Goes Here

// function statement
function greet() {
	console.log('hi');
}

greet();

// functions are first-class
function logGreeting(fn) {
	fn();
}

logGreeting(greet);

// function expression

var greetMe = () => {
	console.log('Hi Tony');
}

greetMe();

//it's first class so it can still be passed around
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(() => {
	console.log('Hello Tony');
});