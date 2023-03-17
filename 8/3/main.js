function f() {
  console.log("Hello!");
}



Function.prototype.defer = function(ms) {
  setTimeout(this, ms)
}


// f.defer(1000);


function fa(a, b) {
  console.log( a + b );
}

Function.prototype.deferen = function(ms) {
  let func = this
  return function(...args) {
    setTimeout(() => func.apply(this, args), ms)
  }
}

fa.deferen(1000)(1, 2); 
