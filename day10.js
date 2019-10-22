//https://www.codewars.com/kata/training-js-number-19-methods-of-string-object-touppercase-tolowercase-and-replace/train/javascript
function alienLanguage(str) {
  const lanElient = [];
  const up = str.toUpperCase().split(' ');
  for (let i = 0; i < up.length; i++) {
    const upper = up[i].slice(0, -1);
    const lower = up[i].slice(-1).toLowerCase();
    lanElient.push(upper + lower);
  }
  return lanElient.join(' ');
}
