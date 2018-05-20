//app.js
//本地存储中userinfo key
const USERINFOKEY = "userinfo";

let app = {
  globalData: {
    userInfoKey: USERINFOKEY,
    hasUserInfo: !!wx.getStorageSync(USERINFOKEY), //是否获取用户信息成功标志
    userInfo: wx.getStorageSync(USERINFOKEY), //用户信息
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  //获取用户信息
  setUserinfo: function (e) {
    //先判断缓存中时候存在用户信息
    let userinfo = wx.getStorageSync(USERINFOKEY)
    if (!userinfo) {
      wx.setStorageSync(USERINFOKEY, e.detail.userInfo)
      wx.reLaunch({
        url: '/pages/index/index'
      })
    } else {
      wx.reLaunch({
        url: '/pages/auth/auth'
      })
    }
  },
  getUserinfo: function() {
    return wx.getStorageSync(USERINFOKEY)
  }
};


App(app)