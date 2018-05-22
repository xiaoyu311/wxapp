// pages/login/login.js
import { Login } from '../../lib/js/server.js';
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    user: '',
    pass: ''
  },

  //获取用户名
  getUsername({ detail }) {
    this.setData({
      user: detail.value
    });
  },

  //获取密码
  getPassword({ detail }) {
    console.log(detail)
    this.setData({
      pass: detail.value
    });
  },

  // 登录
  Login() {
    wx.reLaunch({
      url: '../../pages/index/index'
    })
    console.log(getCurrentPages())
    // Login(
    //   data => {
    //     if (data.status == 1) {
    //       wx.switchTab({
    //         url: 'pages/index/index'
    //       });
    //     }
    //   },
    //   () => {},
    //   this.data.user,
    //   this.data.pass
    // );
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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