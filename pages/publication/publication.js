// pages/pagepublication/pagepublication.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startTime:"",
    endTime:""
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
  
  },
   /**
   * 设置开始时间
   */
  setStartTime: function(e){
    this.setData({
      startTime: e.detail.value
    })
  },
   /**
   * 设置结束时间
   */
  setEndTime: function(e){
    this.setData({
      endTime: e.detail.value
    })
  },
  //选择文件
  chooseImage: function(){
    wx.chooseImage({
      success: function(res) {
        console.log(res)
      },
    })
  }
})