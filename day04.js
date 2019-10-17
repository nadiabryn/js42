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

//https://www.codewars.com/kata/training-js-number-11-loop-statement-break-continue/train/javascript
function grabDoll(dolls) {
  let bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] == 'Hello Kitty' || dolls[i] == 'Barbie doll') {
      bag.push(dolls[i]);
      if (bag.length === 3) break;
    } else continue;
  }
  return bag;
}

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  let arrOfFive = [];
  for (let key in obj) {
    if (key.length === 5) arrOfFive.push(key);
    if (obj[key].length === 5) arrOfFive.push(obj[key]);
  }
  return arrOfFive;
}
