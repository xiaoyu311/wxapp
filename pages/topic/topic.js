
Page({
  data: {
    replyModel: false
  },
  Reply() {
    this.setData({
      replyModel: !this.data.replyModel
    });
    console.log(111)
  }
})