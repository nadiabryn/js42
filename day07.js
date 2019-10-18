//https://www.codewars.com/kata/error-throwing-error-handling-number-2/train/javascript
function validateMessage(msg) {
  if (msg === null) throw new ReferenceError('Message is null!');
  if (typeof msg !== 'string')
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  if (msg.length === 0 || msg.length > 255) throw new RangeError(`Message contains ${msg.length} characters!`);
  if (msg.includes('<') && msg.includes('>')) return false;
  return true;
}
