// pages/auth/auth.js
import {
  con,
  util
} from '../../utils/factory.js'

let page = {
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function (options) {
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              // console.log(res)
              page.setUserinfoToStorage(res.userInfo)
            },
            fail: function (fail) {
              console.error("Get userinfo error:", err)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    if (!e.detail.userInfo) {
      console.log(e.detail.errMsg);
    } else {
      page.setUserinfoToStorage(e.detail.userInfo);
    }
  },

  setUserinfoToStorage: function (userInfo) {
    util.setStorage(con.USERINFOSTORAGE, {
      data: userInfo,
      success: function (data) {
        wx.navigateTo({
          url: '/pages/index/index',
        })
      },
      error: function (err) {
        console.error(err)
      }
    })
  }
}

Page(page)