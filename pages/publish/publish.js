// pages/publish/publish.js
import { article_list } from '../../lib/js/server.js';
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: false,
    selectTitle: '请选择',
    titleText: ''
  },
  // 显示下拉类型
  Select() {
    this.setData({
      active: !this.data.active
    });
  },
  // 标题内容
  getInputText({ detail }) {
    this.setData({ titleText: detail.value });
  },
  // 选择列表
  selectItem(event) {
    console.log(app)
    const dataset = event.currentTarget.dataset;
    this.setData({
      active: false,
      selectTitle: dataset.title
    });
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