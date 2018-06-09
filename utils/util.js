export class Util {
  formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  }

  formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
  }

  setStorage = (key, obj) => {
    wx.setStorage({
      key: key,
      data: obj.data,
      success: function (res) {
        obj.success(res);
      },
      fail: function (err) {
        obj.error(err);
      }
    })
  }

  getStorage = (key) => {
   try {
     wx.getStorageSync(key)
   } catch (e) {
     console.error(e)
   }
  }

  

}

// module.exports = {
//   formatTime: formatTime
// }