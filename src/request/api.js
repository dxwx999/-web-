//将request.js整理导入
import request from '@/request/request'
//封装一个函数专门调用get请求
function getDetail(url){
  return ()=>request.get(url)
}
//按需导出每个请求，也就是按需导出每个api

/* 请求首页数据 */
//轮播图
export const GetChart =getDetail('/banner');
//热门歌单分类
export const GetRecommend=getDetail('/top/playlist/hot')
//独家放送
export const GetSole=getDetail('/personalized/privatecontent')
export const GetNewSongs=getDetail('/personalized/newsong')