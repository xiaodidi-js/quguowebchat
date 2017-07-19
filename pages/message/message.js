// message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listDome: [],
    serviceDate: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  引入外部js
    var forDate = require('../../utils/util.js');

    var that = this, id = wx.getStorageSync("keyID");
    wx.request({
      url: 'http://quguocms.ittun.com/public/api/portal/articles?only=read&id=' + id,
      methods: "GET",
      data: {},
      header: {
        "Content-Type": "application/json"
      },
      success(res) {
        that.data.listDome = res.data.data;
        console.log(that.data.listDome);

        console.log(forDate.formatTime(that.data.listDome.published_time));
        //  published_time
        that.setData({
          listDome: res.data.data,
          serviceDate: forDate.formatTime(that.data.listDome.published_time)
        });
      },
      complete() {
        
      }
    })
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