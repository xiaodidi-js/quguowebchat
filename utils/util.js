function formatTime(number) {   //  格式化时间

  var n = number * 1000;
  var date = new Date(n);
  //  年份
  var year = date.getFullYear()
  //  月份
  var month = date.getMonth() + 1
  //  当日
  var day = date.getDate()

  //  小时
  var hour = date.getHours()
  //  分钟
  var minute = date.getMinutes()
  //  秒钟
  var second = date.getSeconds()
  //  合并变量 
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

// function toDate(number) {
//   var n = number * 1000;
//   var date = new Date(n);
//   var Y = date.getFullYear() + '-';
//   var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
//   var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//   return (Y + M + D)
// }