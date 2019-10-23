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


//https://www.codewars.com/kata/training-js-number-21-methods-of-string-object-trim-and-the-string-template/train/javascript
function fiveLine(s) {
  const clearStr = s.trim();
  let result = '';
  for (let i = 1; i <= 5; i++) {
    if (i === 5) {
      result += clearStr.repeat(i);
      break;
    }
     result += clearStr.repeat(i)+'\n';
   }
  return result;
}

//https://www.codewars.com/kata/training-js-number-20-methods-of-string-object-charat-charcodeat-and-fromcharcode/train/javascript
function topSecret(str){
  var chars = str.split('');
  let decript = [];
  for (var i = 0; i < chars.length; i++) chars[i] = chars[i].charCodeAt() - 3;
  for (let j = 0; j < chars.length; j++) {
    if (
      (chars[j] >= 65 && chars[j] <= 89) ||
      (chars[j] >= 97 && chars[j] <= 121)
    )
      decript[j] = String.fromCharCode(chars[j]);
    if (chars[j] < 65 || (chars[j] > 89 && chars[j] < 97) || chars[j] > 121)
      decript[j] = String.fromCharCode(chars[j] + 26);
    
  }
  return decript.join(' ');
  
Повертає:  Test Results:
Expected: '\'My name is John\'', instead got: '\'M y 7 n a m e 7 i s 7 J o h n\''
Expected: '\'this is an example\'', instead got: '\'t h i s 7 i s 7 a n 7 e x a m p l e\''
Expected: '\'Hello World!\'', instead got: '\'H e l l o 7 W o r l d 8\''

?????? Я заплуталася з умовами при яких символи не повинні змінюватися.
