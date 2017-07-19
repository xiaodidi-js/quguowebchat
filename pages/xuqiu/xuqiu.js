// xuqiu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 表单提交
   */
  formSubmit(e) {
    var that = this;
    var myname = e.detail.value.myname.length;
    var myphone = e.detail.value.myphone.length;
    var myqq = e.detail.value.myqq.length;
    var mymessage = e.detail.value.mymessage.length;

    if (myname === 0 || myphone === 0 || myqq === 0 || mymessage === 0) {
      wx.showToast({   //  提示
        title: '表单不能为空',
        icon: 'error',
        duration: 1000
      });
    } else {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      wx.showToast({   //  提示
        title: '提交成功！',
        icon: 'error',
        duration: 1000
      })
    }

    // wx.request({
    //   url: '',
    //   data: formData,
    //   header: {
    //     'Content-Type' : 'application/json'
    //   },
    //   success: function(e) {  //  请求成功处理
    //     console.log(e);
    //   },
    //   fail: function() {  //请求失败处理

    //   }
    // })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})