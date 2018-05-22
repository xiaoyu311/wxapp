//index.js
//获取应用实例
import { article_list } from '../../lib/js/server.js';
const app = getApp();

Page({
  data: {
    articleList: []
  },
  onLoad() {
    article_list(
      data => {
        console.log(data);
      }
    );
  }
})