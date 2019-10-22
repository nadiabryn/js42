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
  let k = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c) k++;
  }
  return k > 1 ? k : k === 1 ? 0 : -1;
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
