// Сумма пользовательских чисел
// let a = +prompt('Введи a')
// let b = +prompt('Введи b')

  // console.log(a+b)

// Ввод числового значения


const readNumber = () => {
  let a = prompt('Vvedi a')

  if (Number.isNaN(+a)) {
    readNumber()
  } else if (!Number.isNaN(+a)) {
    console.log(a)
  }
}

// readNumber ()

//Случайное число от min до max

const random = (a, b) => {
  return (Math.random() * (b - a) + a )
}

// Случайное целое число от min до max

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max + 1 * min) + min)
}

console.log( randomInteger(1, 5) ); // 1
console.log( randomInteger(1, 5) ); // 3
console.log( randomInteger(1, 5) );