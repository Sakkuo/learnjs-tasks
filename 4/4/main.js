// Задача "Создайте калькулятор"
let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  },
};


// calculator.read(10, 15);
// console.log( calculator.sum() );
// console.log( calculator.mul() );


// Задача "Цепь вызовов"

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this
  }
};


ladder.up().up().down().showStep().down().showStep()