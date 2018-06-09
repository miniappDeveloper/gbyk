// pages/home/home.js
import {
  con,
  util
} from '../../utils/factory.js'

let page = {
  data: {
    
  },

  onLoad: function (options) {
    if ( !util.getStorage(con.USERINFOSTORAGE) ) {
      wx.navigateTo({
        url: '/pages/auth/auth',
      })
    } else {
      wx.navigateTo({
        url: '/pages/index/index',
      })
    }
  },
}

Page(page)