//https://www.codewars.com/kata/maximum-multiple/train/javascript
function maxMultiple(divisor, bound) {
  let n = bound - (bound % divisor);
  return n;
}

//https://www.codewars.com/kata/is-he-gonna-survive/train/javascript
function hero(bullets, dragons) {
  if (bullets >= dragons * 2) return true;
  return false;
}
