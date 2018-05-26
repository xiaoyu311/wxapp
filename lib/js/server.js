import Request from './request.js';

// 文章列表
export const article_list = (success, fail) => Request(success, fail, 'get', '/article/article_list');

// 登录
export const Login = (success, fail, loginname, password) => Request(success, fail, 'post', '/sign/signup', { loginname, password });

// 文章发表
export const article_add = (success, fail, title, tab, content) => Request(success, fail, 'post', '/article/article_add', { title, tab, content });

// 收藏文章
export const collection = (success, fail, article_id) => Request(success, fail, 'post', '/article/collection', { article_id });
