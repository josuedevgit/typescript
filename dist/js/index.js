"use strict";
let x = 10;
x = 20;
console.log(x);
let y = 12;
let z = 12;
let firstName = "Mateus";
let age = 30;
const isAdmin = true;
console.log(typeof firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
myNumbers.push(5);
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
const user = {
    name: "Pedro",
    age: 18
};
console.log(user);
console.log(user.name);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 200;
const userId = 10;
const productId = "001";
const shirId = 123;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa",
    size: Size.G
};
let teste;
teste = "algumvalor";
teste = null;
function soma(a, b) {
    return a + b;
}
console.log(soma(12, 12));
function sayHelloTo(name) {
    return `Hello, ${name}`;
}
console.log(sayHelloTo("Josué"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Ola, ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("Josué");
greeting("Josué", "Lord");
