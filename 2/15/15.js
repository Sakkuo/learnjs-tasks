//2

const checkAge = (age) => {
  return age > 18 ? true : confirm("Родители разрешили?");
};
const checkAge2 = (age) => {
  return age > 18 || confirm("Родители разрешили?");
};

const min = (a, b) => {
  return a > b ? b : a;
};

const pow = (x, n) => {
  if (n >= 1 && n % 1 === 0) {
    return x**n
  } else {
    return 'Вы ввели не натуральное значение степени'
  }
};

const askNumbers = () => {
  const numberX = +prompt('Введите число')
  const numberN = +prompt('Введите степень')
  console.log(pow(numberX, numberN))
}

askNumbers()

// console.log(pow(3, 2))
// console.log(pow(3, 3)) 
// console.log(pow(1, 100))

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));
