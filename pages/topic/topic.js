
import { article_info, reply_list } from '../../lib/js/server.js';

Page({
  data: {
    articleInfo: null,
    article_id: undefined,
    replyList: [] 
  },
  onLoad(options) {
    this.setData({
      article_id: options.article_id
    });
    article_info(
      res => {
        this.setData({
          articleInfo: res.data
        });
      },
      () => {},
      options.article_id
    );
    reply_list(
      res => {
        if (res.status == 1) {
          let replyList = res.data.map(item => { 
            if (item.Reply_id) {
              let Reply_loginame;
              res.data.forEach(value => {
                if (value.reply_id == item.Reply_id) {
                  Reply_loginame = value.author.loginname;
                }
              });
              item['Reply_loginame'] = Reply_loginame;
            }
            return item;
          });
          this.setData({ replyList });
        }
      },
      () => {},
      options.article_id
    );
  },
  Comment() {
    wx.navigateTo({
      url: '../../pages/comment/comment?article_id=' + this.data.article_id,
    });
  }
})