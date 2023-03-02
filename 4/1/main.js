// Задача "Привет, object"

const user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

// Задача "Проверка на пустоту"

let schedule = {};

const isEmpty = (obj) => {
  for (let key in obj) {
    return false
  }
  return true
}

// console.log(isEmpty(schedule))

schedule["8:30"] = "get up";

// console.log(isEmpty(schedule))

// Задача "Сумма свойств объекта?"


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (let key in salaries) {
  sum += salaries[key]
}

// console.log(sum)


// Задача "Умножаем все числовые свойства на 2"

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2
    }
  }
}

multiplyNumeric(menu)

// console.log(menu)