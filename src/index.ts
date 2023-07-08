let x: number = 10; // definição de tipo

x = 20;

console.log(x);

// inferencia x annotation
let y = 12; // -> aceitável a inferencia

// y = "teste"; dá erro // inferencia de tipo

let z: number = 12; // annotation

// tipos básicos
let firstName: string = "Mateus";
let age: number = 30;
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName);

// Array
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);

myNumbers.push(5);

// tuplas

let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["a", "b"]];

// object literals
const user: {name: string, age: number} = {
    name: "Pedro",
    age: 18
}

console.log(user);

console.log(user.name);

// any -> má prática
let a: any = 0;
// qualquer tipo
a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10";

id = 200;

// id = true;
// id = [];

// type alias
type myIdType = number | string // variável de tipo

const userId: myIdType = 10;
const productId: myIdType = "001";
const shirId: myIdType = 123;

// enum
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa",
    size: Size.G
}

// literal types
let teste: "algumvalor" | null

teste = "algumvalor";
teste = null;

// funcoes
function soma(a: number, b: number) {
    return a + b;
}

console.log(soma(12, 12));

function sayHelloTo(name: string): string /* vai ter de retornar uma string */{
    return `Hello, ${name}`;
}

console.log(sayHelloTo("Josué"));

function logger(msg: string): void /* funcao sem retorno */ {
    console.log(msg);
}

logger("Teste!");

function greeting(name: string, greet?: string): void {
    if(greet) {
        console.log(`Ola, ${greet} ${name}`);
    } else {
        console.log(`Olá ${name}`);
    }
    
}

greeting("Josué");
greeting("Josué", "Lord");

// interfaces
