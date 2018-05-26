import { collection } from '../../js/server.js';
import { formatTime } from '../../../utils/util.js';

Component({
  properties: {
    articleInfo: {
      type: Object,
      value: {},
      observer({ collected, create_at }) {
        console.log(formatTime(create_at));
        this.setData({ 
          collected,
          create_at: formatTime(create_at)
        });
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
    collected: false,
    create_at: ''
  },
  methods: {
    // 点击收藏
    handleCollect({ currentTarget }) {
      if (!this.data.collected) {
        collection(
          res => {
            if (res.status == 1) {
              this.setData({
                collected: true
              });
            }
          },
          () => { },
          currentTarget.dataset.article_id
        );
      }
    },
  }
})