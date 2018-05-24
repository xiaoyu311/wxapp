//index.js
//获取应用实例
import { article_list } from '../../lib/js/server.js';
const app = getApp();

Page({
  data: {
    articleList: [],
    navItems: {
      all: '全部',
      good: '精华',
      share: '分享',
      ask: '问答',
      job: '招聘',
      test: '测试',
    },
    nav: [
      { title: '全部', tab: 'all' },
      { title: '精华', tab: 'good' },
      { title: '分享', tab: 'share' },
      { title: '问答', tab: 'ask' },
      { title: '招聘', tab: 'job' },
      { title: '测试', tab: 'test' },
    ],
    current: 0, // 当前滑块的索引值
  },
  switchTab({ detail }) {
    this.setData({
      current: detail.current
    });
    console.log(detail)
  },
  // 列表加载
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    article_list(
      data => {
        wx.hideLoading();
        if (data.status == 1) {
          this.setData({
            articleList: data.data
          });
        }
      },
      () => {
        wx.hideLoading();
      }
    );
  }
})