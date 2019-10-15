//https://www.codewars.com/kata/training-js-number-2-basic-data-types-number/train/javascript
let v1 = 50;
(v2 = 100), (v3 = 150), (v4 = 200), (v5 = 2), (v6 = 250);
function equal1() {
  const a = v1;
  const b = v1;
  return a + b;
}

function equal2() {
  const a = v4;
  const b = v2;
  return a - b;
}
function equal3() {
  const a = v1;
  const b = v5;
  return a * b;
}
function equal4() {
  const a = v4;
  const b = v5;
  return a / b;
}
function equal5() {
  const a = v6;
  const b = v3;
  return a % b;
}

//https://www.codewars.com/kata/training-js-number-3-basic-data-types-string/train/javascript
let a1 = 'A',
  a2 = 'a',
  b1 = 'B',
  b2 = 'b',
  c1 = 'C',
  c2 = 'c',
  d1 = 'D',
  d2 = 'd',
  e1 = 'E',
  e2 = 'e',
  n1 = 'N',
  n2 = 'n';
function Dad() {
  return d1 + a2 + d2;
}

function Bee() {
  return b1 + e2 + e2;
}

function banana() {
  return b2 + a2 + 'nana';
}

function answer1() {
  return 'no';
}

function answer2() {
  return 'no';
}

function answer3() {
  return 'yes';
}


//https://www.codewars.com/kata/training-js-number-4-basic-data-types-array/train/javascript
function getLength(arr) {
  return arr.length;
}

function getFirst(arr) {
  return arr[0];
}

function getLast(arr) {
  return arr[arr.length - 1];
}

function pushElement(arr) {
  let el = 1;
  arr.push(el);
  return arr;
}

function popElement(arr) {
  arr.pop();
  return arr;
}

//https://www.codewars.com/kata/training-js-number-5-basic-data-types-object/train/javascript
function animal(obj) {
  return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.';
}
