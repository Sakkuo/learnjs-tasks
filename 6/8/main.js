// Вывод каждую секунду

const printNumbers = (from, to) => {
  let base = from
    let inter = setInterval(() => {
      console.log(base);
      if (base == to) {
        clearInterval(inter)
      }
      base++
    }, 1000);
};

// printNumbers(1, 2)
