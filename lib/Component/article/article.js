Component({
  properties: {
    articleInfo: {
      type: Object,
      value: {},
      observer({ collected }) {
        console.log(collected)
      }
    }
  },
  data: {
    navItems: {
      all: '全部',
      good: '精华',
      share: '分享',
      ask: '问答',
      job: '招聘',
      test: '测试',
    },
    collected: false
  },
  methods: {
    // 点击收藏
    handleCollect() {
      this.setData({
        collected: !this.data.collected
      });
    },
  }
})