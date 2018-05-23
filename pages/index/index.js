//index.js
//获取应用实例
import { article_list } from '../../lib/js/server.js';
const app = getApp();

Page({
  data: {
    articleList: []
  },
  goLog() {
    wx.navigateTo({
      url: '/pages/logs/logs',
    });
  },
  onLoad() {
    article_list(
      data => {
        console.log(data);
      }
    );
  }
})