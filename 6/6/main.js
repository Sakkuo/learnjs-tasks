//Установка и уменьшение значения счётчика
function makeCounter() {
  let count = 0

  function counter() {
    return count++;
  };


  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter()

// console.log(counter())
// console.log(counter())






//Сумма с произвольным количеством скобок

let sum = (a) => {
  let currentSum = a

  let f = (b) => {
    currentSum += b
    return f
  }

  f.toString = () => {
    return currentSum
  }
  return f

}




console.log( sum(0)(1)(2)(3)(4)(5).toString() )