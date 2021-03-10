
exports.min = function min(array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    let minValue = array[0];
    for (let i = 0; i < array.length; i++) {
      if (minValue > array[i]) {
        minValue = array[i]
      }
    }
    return minValue;
  }
}

exports.max = function max(array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    let maxValue = array[0];
    for (let i = 0; i < array.length; i++) {
      if (maxValue < array[i]) {
        maxValue = array[i]
      }
    }
    return maxValue;
  }
}

exports.avg = function avg(array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum / array.length;
  }
}
