import config from './config.js';

const Request = (success, fail, method = 'GET', url = '', data = {}) => {
  method = method.toUpperCase();
  wx.request({
    url: config.baseUrl + url,
    method,
    data,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      if (res.statusCode == 200) {
        success(res.data);
      }
    },
    fail() {
      fail();
      throw new Error(`${url}接口获取数据失败`);
      return;
    }
  });
}

export default Request;