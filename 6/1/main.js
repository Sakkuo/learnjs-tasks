//Вычислить сумму чисел до данного

const sumCicle = (n) => {
  if (n >= 0) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  } else {
    return "Число должно быть > 0";
  }
};

// console.log(sumCicle(-1));

const sumRecurse = (n) => {
  if (n === 1) {
    return n;
  } else {
    return n + sumRecurse(n - 1);
  }
};

// console.log(sumRecurse(10000));

const sumProgress = (n) => {
  return ((n + 0) / 2) * (n - 0 + 1);
};

// console.log(sumProgress(100))




//Вычислить сумму чисел до данного

const factorial = (n) => {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
};

// console.log( factorial(5) );






// Числа Фибоначчи

const fib = (n) => {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

// console.log( fib(77) );






//Вывод односвязного списка

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const printList = (list) => {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
};

// printList(list);






//Вывод односвязного списка в обратном порядке

const printListReverse = (list) => {
  if (list.next) {
    printListReverse(list.next);
    console.log(list.value);
  } else {
    console.log(list.value)
  }

};

// printListReverse(list)



const printListReverseCicle = (list) => {
  let arr = []
  let temp = list

  while (temp) {
    arr.push(temp.value)
    temp = temp.next
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
  }

}

// printListReverseCicle(list)

