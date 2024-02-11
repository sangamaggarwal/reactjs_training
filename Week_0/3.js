// function have access of parent variable, even after the parent function has closed.
const increment = (function () {
  let count = 0;
  return function () {count += 1; return count}
})();

//by adding multiple rows for increment() function will increment the counter by one.
increment();
increment();
increment();
increment();
