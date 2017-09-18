// 获取当前月开始时间
function getNowMonthStartDate (date) {
  var date = new Date();
  return date.toLocaleString().match(/\d{0,4}\/\d{1,2}\/(\d{1,2})/)[0].replace(/(\d{0,4}\/\d{1,2}\/)\d{1,2}/, "$11")
}

// 获取当前月最有一天
function getNowMonthLastDate (date) {
  date = new Date(date);
  // 下一月开始
  var nextMonthStartDate = date.toLocaleString().match(/\d{0,4}\/\d{1,2}\/(\d{1,2})/)[0].replace(/(\d{0,4})\/(\d{1,2})\/(\d{1,2})/, function(){
  	return parseInt(arguments[2]) === 12 ? (parseInt(arguments[1]) + 1) + "/1/1" : arguments[1] + "/" + (parseInt(arguments[2]) + 1) + "/1";
  })
  return new Date(new Date(nextMonthStartDate).getTime() -1).toLocaleString().match(/\d{0,4}\/\d{1,2}\/(\d{1,2})/)[0];
}
