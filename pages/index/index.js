//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: wx.getStorageSync(app.globalData.userInfoKey),
    hasUserInfo: app.globalData.hasUserInfo,
    imgUrls: [
      'http://img.zcool.cn/community/011d455af2e4c7a80121604526b480.jpg@1280w_1l_2o_100sh.jpg',
      'http://img.zcool.cn/community/01e1285acc8650a8012138675ab2a2.jpg@1280w_1l_2o_100sh.jpg',
      'http://img.zcool.cn/community/01756b5add7e92a80120927b3af0d8.jpg@1280w_1l_2o_100sh.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 800,
    isShowUserPannel:false, //是否显示个人中心面板
  },
  onLoad: function () {
    this.setData({
      userInfo: app.getUserinfo()
    })
  },
  showUserPannel: function(){
    let isShow = this.data.isShowUserPannel
    if (!isShow) {
      isShow = true
    } else {
      isShow = false
    }
    this.setData({
      isShowUserPannel: isShow
    })
  },
  //跳转详情页
  gotoDetail: function() {
    wx.navigateTo({
      url: '/pages/pageopen/pageopen',
    })
  }
})

