//app.js
import {
  Login
} from './lib/js/server.js';
App({
  onLaunch: function () {

    wx.request({
      url: 'https://m.xxiaoyu.com/getcookie',
      method: 'GET',
      header: {
        'content-type': 'application/json', // 默认值
      },
      success(res) {
        try {
          let cookie = res.header['set-cookie'];
          let index = cookie.indexOf(';');
          wx.setStorageSync('xiaoyu_sessionID', cookie.slice(0, index));
          Login(
            res => {
              console.log(res)
            },
            () => {},
            'xiaoyu',  
            'xiaoyu'      
          )

        } catch (err) {
          throw new Error('设置cookie失败');
          return;
        }
      },
      fail() {
        throw new Error('获取cookie失败');
        return;
      }
    })

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        // if (res.authSetting['scope.userInfo']) {
        //   // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        //   wx.getUserInfo({
        //     success: res => {
        //       // 可以将 res 发送给后台解码出 unionId
        //       this.globalData.userInfo = res.userInfo

        //       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        //       // 所以此处加入 callback 以防止这种情况
        //       if (this.userInfoReadyCallback) {
        //         this.userInfoReadyCallback(res)
        //       }
        //     }
        //   })
        // }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})