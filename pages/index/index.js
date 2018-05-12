//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    articleList: [
      {
        article_id: 1,
        title: 'git / git',
        content: '似的发射点发射点大发噶 金卡法担保法可被罚款发啊不放假咯部分',
        auth: 'xiao',
        star: 20,
        isCollection: false
      },
      {
        article_id: 2,
        title: '的速度',
        content: '似的发射点发射点大发噶 金卡法担保法可被罚款发啊不放假咯部分',
        auth: 'xiao',
        star: 20,
        isCollection: false
      },
      {
        article_id: 3,
        title: '韩国国会',
        content: '似的发射点发射点大发噶 金卡法担保法可被罚款发啊不放假咯部分',
        auth: 'xiao',
        star: 20,
        isCollection: false
      },
      {
        article_id: 4,
        title: 'git / git',
        content: '似的发射点发射点大发噶 金卡法担保法可被罚款发啊不放假咯部分',
        auth: 'xiao',
        star: 20,
        isCollection: false
      },
      {
        article_id: 5,
        title: 'git / git',
        content: '似的发射点发射点大发噶 金卡法担保法可被罚款发啊不放假咯部分',
        auth: 'xiao',
        star: 20,
        isCollection: false
      },
      {
        article_id: 6,
        title: 'git / git',
        content: '似的发射点发射点大发噶 金卡法担保法可被罚款发啊不放假咯部分',
        auth: 'xiao',
        star: 20,
        isCollection: false
      },
      {
        article_id: 7,
        title: 'git / git',
        content: '似的发射点发射点大发噶 金卡法担保法可被罚款发啊不放假咯部分',
        auth: 'xiao',
        star: 20,
        isCollection: false
      },
      {
        article_id: 8,
        title: 'git / git',
        content: '似的发射点发射点大发噶 金卡法担保法可被罚款发啊不放假咯部分',
        auth: 'xiao',
        star: 20,
        isCollection: false
      },
      {
        article_id: 9,
        title: 'git / git',
        content: '似的发射点发射点大发噶 金卡法担保法可被罚款发啊不放假咯部分',
        auth: 'xiao',
        star: 20,
        isCollection: false
      },
      {
        article_id: 10,
        title: 'git / git',
        content: '似的发射点发射点大发噶 金卡法担保法可被罚款发啊不放假咯部分',
        auth: 'xiao',
        star: 20,
        isCollection: false
      },
      {
        article_id: 11,
        title: 'git / git',
        content: '似的发射点发射点大发噶 金卡法担保法可被罚款发啊不放假咯部分',
        auth: 'xiao',
        star: 20,
        isCollection: false
      },

    ],
    scrollHeight: 0
  },
  onLoad() {
    wx.getSystemInfo({
      success: res => {
        let scrollHeight = 750 / res.screenWidth * res.screenHeight - 80;
        this.setData({ scrollHeight });
        console.log(this)
      },
      fail: () => {}
    });
  },
  tabAll() {
    console.log(this)
  }
})
