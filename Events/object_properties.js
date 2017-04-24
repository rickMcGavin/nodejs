// object properties as methods

const obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);

const prop = 'greet';
console.log(obj[prop]);

// functions and arrays

const arr = [];

arr.push(() => console.log('Hello World'));
arr.push(() => console.log('Hello World'));
arr.push(() => console.log('Hello World'));

arr.forEach(item => item());