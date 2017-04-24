const Emitter = require('events');
const config = require('./config').events;

const emtr = new Emitter();

emtr.on(config.GREET, () => console.log('Somewhere, someone said hello'));

emtr.on(config.GREET, () => console.log('A greeting occurred'));

console.log('Hello!');
emtr.emit(config.GREET);