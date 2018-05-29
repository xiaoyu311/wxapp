// pages/comment/comment.js
import { replies } from '../../lib/js/server.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '',
    article_id: undefined
  },

  bindTextArea({
    detail
  }) {
    this.setData({
      content: detail.value
    });
  },

  Confirm() {
    if (!this.data.article_id) return;
    if (!this.data.content) return;
    replies(
      res => {
        if (res.status == 0) {
          wx.navigateTo({
            url: '../../pages/login/login',
          });
          return;
        }
        if (res.status == 1) {
          wx.navigateBack();
          return;
        }
      },
      () => {},
      this.data.article_id,
      this.data.content
    );
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      article_id: options.article_id
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})