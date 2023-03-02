// Задача "Две функции - один объект"

let obj = {}

function A() { 
  return obj
}
function B() {
  return obj
}

let a = new A();
let b = new B();


// console.log(a == b )

// Задача "Создайте калькулятор при помощи конструктора, new Calculator"

function Calculator() {
  this.read = function() {
    // this.a = +prompt('Введи a')
    // this.b = +prompt('Введи b')
  }
  this.sum = function() {
    return this.a + this.b
  }
  this.mul = function() {
    return this.a * this.b
  }
}


let calculator = new Calculator();
calculator.read();

// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );


// Задача "Создайте new Accumulator"


function Accumulator(startingValue) {
  this.value = startingValue

  this.read = function() {
    this.value += +prompt('Введи число')
  }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value);
console.log(accumulator.value)