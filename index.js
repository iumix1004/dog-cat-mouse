var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('Bull');
var tom = new Cat('Tom');
dog.eat(tom);
console.log(dog);