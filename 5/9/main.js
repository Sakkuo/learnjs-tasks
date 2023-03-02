// Сумма свойств объекта

const sumSalaries = (salaries) => {
  let salar = Object.values(salaries)
  let sumSalar = 0

  for (let number of salar) {
    sumSalar += number
  }
  return sumSalar
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


// console.log(( sumSalaries(salaries) ))




//Подсчёт количества свойств объекта
const count = (obj) => {
  return Object.keys(obj).length
}

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2