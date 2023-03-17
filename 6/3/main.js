// Сумма с помощью замыканий

const sum = x => a => {
  console.log(x+a)
}

sum(1)(2)
sum(5)(-1)





// Фильтрация с помощью функции

let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (a, b) => value => {
  return value >= a && value <= b
}

// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6


const inArray = arr => value => {
  return arr.includes(value)
}


// console.log( arr.filter(inArray([1, 2, 10])) );






// Сортировать по полю

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];


const byField = field => {
  return (a, b) => a[field] > b[field] ? 1 : -1
}


users.sort(byField('name'));
// users.forEach(user => console.log(user.name)); // Ann, John, Pete

users.sort(byField('age'));
// users.forEach(user => console.log(user.name));





