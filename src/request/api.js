//将request.js整理导入
import instance from '@/request/request'
//按需导出每个请求，也就是按需导出每个api
/* 请求首页数据 */
//轮播图
export const GetChart =()=>instance.get('/banner');
//热门歌单分类
export const GetRecommend=()=>instance.get('/top/playlist/hot')
//独家放送
export const GetSole=()=>instance.get('/personalized/privatecontent')
export const GetNewSongs=()=>instance.get('/personalized/newsong')

// 歌单详情页面
export const GetSheetDeatil=(params)=>instance.get('/playlist/detail?id='+params.id)
// (id)=>{
//   let url='/playlist/detail?id='+id
//   console.log(url);
//   return ()=>instance.get(url)
// }