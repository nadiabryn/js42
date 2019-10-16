//https://www.codewars.com/kata/is-this-my-tail/train/javascript
function correctTail(body, tail) {
  let sub = body.substr(body.length - tail.length);
  if (sub == tail) {
    return true;
  } else return false;
}
