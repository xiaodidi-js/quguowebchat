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
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//  wx.request 
var httpRequest = (function() {

    var options = {
      formatTime(number) {  //  时间格式化
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
        return [year, month, day].map(this.formatNumber).join('-') + ' ' + [hour, minute, second].map(this.formatNumber).join(':')
      },
      formatNumber(n) {  //  时间格式化
        n = n.toString()
        return n[1] ? n : '0' + n
      },
      post(url, data, success, fail, complete) {  //  post 请求
        wx.request({
          url: url,
          data: data,
          method: 'POST',
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          success: function (res) {
            success(res)
          },
          fail() {  //  请求失败调用
            fail();
          },
          complete(res) {  //  请求成功与否都要调用
            complete(res);
          }
        })
      },
      got(url, data, success, fail, complete) { // get请求
        wx.request({
          url: url, //  请求连接
          data: data, //  请求数据
          header: { 'content-type': 'application/json' },
          success: function (res) { //  请求成功调用
            success(res)
          },
          fail() {  //  请求失败调用
            fail();
          },
          complete(res) {  //  请求成功与否都要调用
            complete(res);
          }
        })
      }
    }
    //  返回options
    return options;

})();

module.exports = {
  formatTime: formatTime,
  httpRequest: httpRequest,
}
