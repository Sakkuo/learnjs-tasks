// Декоратор-шпион

const spy = (func) => {

  const wrapper = (...args) => {
    wrapper.calls.push(args)
    return func.apply(this, args)
  }

  wrapper.calls = []

  return wrapper
}


let work = (a, b) => {
  console.log( a + b ); // произвольная функция или метод
}

work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }





// Задерживающий декоратор

const f = (x, ...arg) => {
  console.log(x, ...arg);
}


const delay = (f, ms) => (...arg) => {
  setTimeout(() => {
    f.apply(this, arg)
  }, ms)
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

// f1000("test", 'hello');
// f1500("test");








//Декоратор debounce

const cons = (number) => {
  console.log(number)
}

const debounce = (func, ms) => {
  let isTimeout = false

  return (...number) => {
    if (isTimeout) {
      return
    }
    func.apply(this, number)

    isTimeout = true

    setTimeout(() => isTimeout = false, ms)
  }

}

let g = debounce(cons, 1000);

// g(1)
// g(2)

// setTimeout( () => g(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => g(4), 1100); // выполняется
// setTimeout( () => g(5), 1500);




//Тормозящий (throttling) декоратор


