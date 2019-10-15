//https://www.codewars.com/kata/training-js-number-7-if-dot-else-and-ternary-operator/train/javascript
function saleHotdogs(n) {
  return n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : 90 * n;
}

//https://www.codewars.com/kata/training-js-number-6-basic-data-types-boolean-and-conditional-statements-if-dot-else/train/javascript
function trueOrFalse(val) {
  return Boolean(val) ? 'true' : 'false';
}

//https://www.codewars.com/kata/training-js-number-8-conditional-statement-switch/train/javascript
function howManydays(month) {
  let days;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
  }
  return days;
}
