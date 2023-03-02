//Деструктурирующее присваивание 

let user = {
  name: "John",
  years: 30
};


let {name, years: age, isAdmin = false} = user

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false



//Максимальная зарплата

let salaries = {
  "John": 100,
  "Pete": 300,
  "fww": 300,
  "Mary": 250
};


const topSalary = (salaries) => {
  let maxSalar = 0;
  let maxName = null;

  for (let [name, value] of Object.entries(salaries)) {
    if (value > maxSalar) {
      maxSalar = value
      maxName = name
    }
  }
  return maxName
}
console.log(topSalary(salaries))