
exports.min = function min(array) {
  if (!array) {
    return 0;
  }
  var count = array.length;
  return count !== 0 ? Math.min(...array) : 0;

}

exports.max = function max(array) {
  if (!array) {
    return 0;
  }
  var count = array.length;
  return count !== 0 ? Math.max(...array) : 0;
 
}

exports.avg = function avg(array) {
  if (!array) {
    return 0;
  }
  var sum = 0,
    count = 0;

  for (var count = array.length, i = count - 1; i >= 0; i--) {
    sum += array[i];
  }
  return count ? sum / count : 0;
}
