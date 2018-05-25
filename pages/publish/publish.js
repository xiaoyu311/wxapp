// pages/publish/publish.js
import {
  article_add
} from '../../lib/js/server.js';
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: false, // 激活选择列表
    selectTitle: '请选择', // 选择的显示标题
    selectValue: '', // 选择的值
    titleText: '', // 标题
    contentText: '' // 内容
  },
  // 显示下拉类型
  Select() {
    this.setData({
      active: !this.data.active
    });
  },
  // 标题内容
  getInputText({
    detail
  }) {
    this.setData({
      titleText: detail.value
    });
  },
  // 选择列表
  selectItem(event) {
    const dataset = event.currentTarget.dataset;
    this.setData({
      active: false,
      selectValue: dataset.value,
      selectTitle: dataset.title
    });
  },
  // 内容输入
  bindTextArea({
    detail
  }) {
    this.setData({
      contentText: detail.value
    });
  },
  // 文章发表
  Publish() {
    const {
      titleText,
      contentText,
      selectValue
    } = this.data;
    if (!titleText) {
      wx.showToast({
        title: '请填写titleText',
        icon: 'none'
      });
      return;
    }
    if (!selectValue) {
      wx.showToast({
        title: '请选择selectValue',
        icon: 'none'
      });
      return;
    }
    if (!contentText) {
      wx.showToast({
        title: '请填写contentText',
        icon: 'none'
      });
      return;
    }
    wx.showLoading({
      title: '发表中...',
      mask: true
    });
    article_add(
      data => {
        wx.hideLoading();
        if (data.status == 1) {
          wx.showToast({
            title: data.message,
          });
          this.setData({
            selectTitle: '请选择', // 选择的显示标题
            selectValue: '', // 选择的值
            titleText: '', // 标题
            contentText: '' // 内容
          });
          return;
        }
        if (data.status == 0) {
          wx.navigateTo({
            url: '/pages/login/login',
          });
        }
      },
      () => {
        wx.hideLoading();
      },
      titleText,
      selectValue,
      contentText
    );
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})