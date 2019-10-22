//https://www.codewars.com/kata/training-js-number-16-methods-of-string-object-slice-substring-and-substr/train/javascript
function cutIt(arr) {
  const elLength = [];
  const slise = [];
  for (const el of arr) {
    elLength.push(el.length);
  }
  for (const item of arr) {
    slise.push(item.slice(0, Math.min(...elLength)));
  }
  return slise;
}

//https://www.codewars.com/kata/training-js-number-17-methods-of-string-object-indexof-lastindexof-and-search/train/javascript
function firstToLast(str, c) {
  const gap = str.lastIndexOf(c) - str.indexOf(c);
  return str.includes(c) ? gap : str.indexOf(c);
}

//https://www.codewars.com/kata/training-js-number-18-methods-of-string-object-concat-split-and-its-good-friend-join/train/javascript
function splitAndMerge(str, sp) {
  const arrChar = [];
  const arrWords = str.split(' ');
  for (const i of arrWords) {
    arrChar.push(i.split('').join(sp));
  }
  return arrChar.join(' ');
}
