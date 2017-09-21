// 获取当前月开始时间  method1
function getStartDateOfMonth (date) {
  date = date || new Date();
  date = new Date(date);
  return date.toLocaleString().match(/\d{0,4}\/\d{1,2}\/(\d{1,2})/)[0].replace(/(\d{0,4}\/\d{1,2}\/)\d{1,2}/, "$11")
}
// 获取当前月开始时间  method2
function getStartDateOfMonth (date) {
  date = new Date(date);
  date.setDate(1);
  return date;
}

// 获取当前月最有一天 method1
function getLastDateOfMonth (date) {
  date = date || new Date();
  date = new Date(date);
  // 下一月开始
  var nextMonthStartDate = date.toLocaleString().match(/\d{0,4}\/\d{1,2}\/(\d{1,2})/)[0].replace(/(\d{0,4})\/(\d{1,2})\/(\d{1,2})/g, function(){
  	return arguments[1] + "/" + (parseInt(arguments[2]) + 1) + "/1"
  })
  return new Date(new Date(nextMonthStartDate).getTime() -1).toLocaleString().match(/\d{0,4}\/\d{1,2}\/(\d{1,2})/)[0];
}
// 获取当前月最有一天 method2
function getLastDateOfMonth (date) {
  date = date || new Date();
  date = new Date(date);
  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  return date;
}
