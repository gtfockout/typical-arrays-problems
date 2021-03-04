
exports.min = function min (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0
  }
  let min = 5400;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min
}

exports.max = function max (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0
  }
  let max = -5400;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max
}

exports.avg = function avg (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let avg = sum / array.length;
  return avg
}
