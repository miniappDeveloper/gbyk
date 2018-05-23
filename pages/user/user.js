// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: ['一般优秀小橙V', '红V大佬', '蓝V小编'],
    sIndex:0,
    fileds: ['搞笑', '情感', '电影', '科技', '社会', '财经', '娱乐', '汽车', '时尚', '艺术', '游戏', '星座', '设计', '萌宠', '育儿', '美食', '站外', '旅游', '家居'],
    fIndex: 2,

  },

  //选择领域
  pickerFiled: function (e) {
    this.setData({
      fIndex: e.detail.value
    })
  },

  //选择微博状态
  pickerStatus: function(e){
    this.setData({
      sIndex:e.detail.value
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