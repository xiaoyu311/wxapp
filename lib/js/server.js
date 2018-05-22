import Request from './request.js';

// 文章列表
export const article_list = (success, fail) => Request(success, fail, 'get', '/article/article_list');
