// anli.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    util: require('../../utils/util.js'), //  导入文件
    loadHidden: true, //  true: 隐藏  false: 显示
    loadMore: true, //  加载更多
    listData: [], //  分类
    article: [],  //  文章
    articleImage: [], //  图片
  },

  /**
   * 跳转页面
   */
  goPage(e) {
    wx.setStorageSync('keyID', e.currentTarget.id);
    wx.navigateTo({
      //  存储ID到本地
      url: '../message/message',
    })
  },
  chonses(e) {
    var that = this;
    //  将ID存储到缓存
    wx.setStorageSync("id", e.currentTarget.id)
    //  在缓存获取ID
    var id = wx.getStorageSync('id');
    //  引入util.js
    var util = require('../../utils/util.js');
    that.setData({ loadHidden: false });
    util.httpRequest.got('http://quguocms.ittun.com/public/api/portal/lists/getCategoryPostList?category_id=' + id, '', function (res) {
      console.log(res.data);
      that.setData({
        article: res.data.data
      });
    }, function () { //  失败处理
      
    }, function () { //  接口调用结束的回调函数
      that.setData({ loadHidden: true });
    });
  },

  loadingMove() {   // 加载更多
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  引入util.js
    var util = require('../../utils/util.js'), that = this;
    util.httpRequest.got('http://quguocms.ittun.com/public/api/portal/categorys?id=8','',function(res) {
      console.log(res.data.data);
      //  获取缓存ID
      var id = wx.getStorageSync('id');
      //  显示加载提示框
      that.setData({ loadHidden: false });
      //  加载页面显示文章

      var url = "";
      if (wx.getStorageSync('id') === '' ) {
        url = 'http://quguocms.ittun.com/public/api/portal/lists/getCategoryPostList?category_id=9';
      } else {
        url = 'http://quguocms.ittun.com/public/api/portal/lists/getCategoryPostList?category_id=' + id;
      }
      util.httpRequest.got(url, '', function (res) {
        console.log(res.data);
        that.setData({
          article: res.data.data
        });
      }, function () { //  失败处理

      }, function () { //  接口调用结束的回调函数
        that.setData({ loadHidden: true });
      });
      //  获取数据
      that.setData({
        listData: res.data.data.sub
      });
    }, function() { //  失败处理

    }, function () { //  接口调用结束的回调函数

    });
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
      // var that = this;
      // that.setData({ loadHidden: false });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})