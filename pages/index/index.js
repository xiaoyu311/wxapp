//index.js
//获取应用实例
import {
  article_list
} from '../../lib/js/server.js';
const app = getApp();

Page({
  data: {
    HeightSwiper: 0,
    AllList: [],
    ShareList: [],
    AskList: [],
    JobList: [],
    TestList: [],
    navItems: {
      all: '全部',
      good: '精华',
      share: '分享',
      ask: '问答',
      job: '招聘',
      test: '测试',
    },
    nav: [{
        title: '全部',
        tab: 'all'
      },
      {
        title: '精华',
        tab: 'good'
      },
      {
        title: '分享',
        tab: 'share'
      },
      {
        title: '问答',
        tab: 'ask'
      },
      {
        title: '招聘',
        tab: 'job'
      },
      {
        title: '测试',
        tab: 'test'
      },
    ],
    current: '', // 当前滑块的索引值
  },
  // 点击nav
  handleNav({
    currentTarget
  }) {
    this.setData({
      current: currentTarget.dataset.index,
      HeightSwiper: this.computedHeight(currentTarget.dataset.index)
    });
  },
  // 滑动
  switchTab({
    detail
  }) {
    this.setData({
      current: detail.current,
      HeightSwiper: this.computedHeight(detail.current)
    });
    // console.log(detail)
  },
  // 根据index计算swiper高度
  computedHeight(index) {
    const {
      AllList,
      ShareList,
      AskList,
      JobList,
      TestList
    } = this.data;
    let length;
    if (index == 2) {
      length = ShareList.length;
    } else if (index == 3) {
      length = AskList.length;
    } else if (index == 4) {
      length = JobList.length;
    } else if (index == 5) {
      length = TestList.length;
    } else {
      length = AllList.length;
    }
    return length;
  },
  // 列表加载
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    article_list(
      res => {
        wx.hideLoading();
        if (res.status == 1) {
          let ShareList = res.data.filter(item => item.tab == 'share');
          let AskList = res.data.filter(item => item.tab == 'ask');
          let JobList = res.data.filter(item => item.tab == 'job');
          let TestList = res.data.filter(item => item.tab == 'test')
          this.setData({
            AllList: res.data,
            ShareList,
            AskList,
            JobList,
            TestList,
            HeightSwiper: res.data.length
          });
        }
      },
      () => {
        wx.hideLoading();
      }
    );
  }
})