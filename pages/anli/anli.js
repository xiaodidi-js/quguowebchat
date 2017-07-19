// anli.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    that.setData({ loadHidden: false });
    //  将ID存储到缓存
    wx.setStorageSync("id", e.currentTarget.id)
    //  在缓存获取ID
    var id = wx.getStorageSync('id');
    wx.request({
      url: 'http://quguocms.ittun.com/public/api/portal/lists/getCategoryPostList?category_id=' + id,
      methods: "GET",
      data: {},
      header: {
        "Content-Type" : "application/json"
      },
      success(res) {
        console.log(res.data);
        that.setData({
          article : res.data.data
          
        });
      },
      complete() {
        that.setData({ loadHidden: true });
      }
    })
  },

  loadingMove() {   // 加载更多
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    var that = this;
    wx.request({
      url: 'http://quguocms.ittun.com/public/api/portal/categorys?id=8',
      methods: "GET",
      header: {
        "Content-Type": "application/json"
      },
      data: {},
      success(res) {
        // that.data.listData = res.data.data;
        console.log(res.data.data.sub);
        that.setData({
          listData: res.data.data.sub
        });
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
    // var that = this;
    // that.setData({ loadHidden: false });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})