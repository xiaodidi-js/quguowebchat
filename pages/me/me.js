// me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "../../images/location.png",
      id: 0,
      latitude: 22.8446532705,
      longitude: 113.2412445545,
      width: 35,
      height: 35
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000",
      width: 2,
      dottedLine: true
    }]
  },

  markertap(e) { //  点击坐标事件
    console.log(e.markerId);
  },

  telPhone() {  //  固定电话
    wx.makePhoneCall({
      phoneNumber: '0757-88793668',
    })
  },

  modelPhone() {  //  移动电话
    wx.makePhoneCall({
      phoneNumber: '13380509065',
    })
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