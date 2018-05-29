
Page({
  data: {
    comment: true,
    content: ''
  },
  Comment() {
    this.setData({
      comment: false
    }); 
    console.log(111)
  },
  Cancel() {
    console.log(11111)
    this.setData({
      comment: true
    });
  },
  bindTextArea({
    detail
  }) {
    this.setData({
      content: detail.value
    });
  },
  Confirm() {
    
  }
})