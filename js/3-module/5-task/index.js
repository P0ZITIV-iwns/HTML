function getMinMax(str) {
  let min = Infinity;
  let max = -Infinity;
  for (s of str.split(' ')) {
      num = Number(s);
      min = min > num ? num : min;
      max = max < num ? num : max;
  }
  return {min, max}
}