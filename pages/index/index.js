//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    articleList: []
  },
  onLoad() {
    wx.request({
      url: 'https://m.xxiaoyu.com/article/article_list', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
      }
    })
  }
})