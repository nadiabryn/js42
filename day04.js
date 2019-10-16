//https://www.codewars.com/kata/training-js-number-9-loop-statement-while-and-do-dot-while/train/javascript
function padIt(str, n) {
  while (n) {
    n % 2 == 1 ? (str = '*' + str) : (str = str + '*');// Ці дужки поставив Prettier. Залишати їх чи видаляти?
    n--;
  }
  return str;
}

//https://www.codewars.com/kata/training-js-number-10-loop-statement-for/train/javascript
function pickIt(arr) {
  let odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 == 1 ? odd.push(arr[i]) : even.push(arr[i]);
  }

  return [odd, even];
}

