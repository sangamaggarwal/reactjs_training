var digits = ["1","2","3","4","5"]

function display_digits() {
  let index = 0;
  const interval = setInterval(() => {
    console.log(digits[index++]);
    if (index === digits.length) {
      clearInterval(interval);
    }
  }, 3000);
}

display_digits();
