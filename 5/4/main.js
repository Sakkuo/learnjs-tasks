//Сумма введённых чисел

const sumInput = () => {
  let arr = []
  let sum = 0

  const sumIn = () => {
    let askValue = prompt('Vvedi')
    if (!(Number.isNaN(+askValue)) && !(askValue === null) && !(askValue === '')) {
      arr.push(+askValue)
      sumIn()
    }
  }
  sumIn()
  for (let number of arr) {
    sum += number
  }
  console.log(sum)
}

// sumInput()

//Подмассив наибольшей суммы

const getMaxSubSum = (arr) => {
  let maxSum = 0;
  let partSum = 0;

  for (let item of arr) {
    partSum += item 
    maxSum = Math.max(maxSum, partSum)
    if (partSum < 0) {
      partSum = 0
    }
  }
  return maxSum
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0