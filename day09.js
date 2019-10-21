function cutIt(arr) {
  const lengthOfEl = [];
  const slise = [];
  for (const el of arr) {
    lengthOfEl.push(el.length);
  }
  for (const item of arr) {
    slise.push(item.slice(0, Math.min(...lengthOfEl)));
  }
  return slise;
}
