
import { replies } from '../../js/server.js';

Component({
  properties: {
    replyInfo: {
      type: Object,
      value: {},
    },
    index: {
      type: String,
      value: 0
    },
    article_id: {
      type: String,
      value: 0,
      observer(article_id) {
        this.setData({ article_id });
      }
    }
  },
  data: {
    replyModel: false,
    content: '',
    article_id: 0
  },
  methods: {
    Reply() {
      this.setData({
        replyModel: !this.data.replyModel
      });
    },
    bindInput({ detail }) {
      this.setData({
        content: detail.value
      });
    },
    Cancel() {
      this.setData({
        replyModel: false
      });
    },
    Confirm({ currentTarget }) {
      if (!this.data.article_id) return;
      if (!this.data.content) return;
      replies(
        res => {
          console.log(res)
        },
        () => {},
        this.data.article_id,
        this.data.content,
        currentTarget.dataset.reply_id
      );
    }
  }
})