exports.min = function min (array) {
  if (array == undefined || array == 0) return 0
  else return Math.min.apply(0,array);
}

exports.max = function max (array) {
  if (array == undefined || array == 0) return 0
  else return Math.max.apply(0,array);
}

exports.avg = function avg (array) {
  if (array == undefined || array == 0) return 0
  else return array.reduce((a,b) =>(a+b))/array.length
}
