// 保留小数点（4舍5入）
function toFixed(num){
  var divisor = parseInt(1 + "0".repeat(num));
  return Math.round(this*divisor)/divisor
}

Number.prototype.toFixed = toFixed
