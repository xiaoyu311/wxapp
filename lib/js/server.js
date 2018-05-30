import Request from './request.js';

// 文章列表
export const article_list = (success, fail) => Request(success, fail, 'get', '/article/article_list');

// 登录
export const Login = (success, fail, loginname, password) => Request(success, fail, 'post', '/sign/signup', { loginname, password });

// 文章发表
export const article_add = (success, fail, title, tab, content) => Request(success, fail, 'post', '/article/article_add', { title, tab, content });

// 收藏文章
export const collection = (success, fail, article_id) => Request(success, fail, 'post', '/article/collection', { article_id });

// 文章详情
export const article_info = (success, fail, article_id) => Request(success, fail, 'get', '/article/article_info/' + article_id);

// 评论列表
export const reply_list = (success, fail, article_id) => Request(success, fail, 'get', '/reply/article/' + article_id + '/reply_list');

// 文章评论
export const replies = (success, fail, article_id, content, Reply_id) => Request(success, fail, 'post', '/reply/article/' + article_id + '/replies', { content, Reply_id });

// 未读消息
export const not_has_read = (success, fail) => Request(success, fail, 'get', '/message/not_has_read');