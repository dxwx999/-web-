function changeById(id,picUrl,name,artists,duration) {

  //获得audio的Dom元素
  let audioDemo = document.getElementById('audio')
  //获得左下角歌曲头像的Dom元素
  let leftImg=document.getElementById('leftImg')
  //获得左下角歌曲名字Dom
  let leftName=document.getElementById('leftName')
  //获得左下角歌曲作者名字Dom
  let leftAuthor=document.getElementById('leftAuthor')
  //获取爱心图标的Dom
  let leftAiXin=document.getElementById('leftAiXin')
  //获取进度条右边时间的Dom
  let rightTime=document.getElementById('rightTime')

  //修改时间
  rightTime.innerText=duration
  //显示爱心
  leftAiXin.style.display='flex'
  //切换作者名字
  leftAuthor.innerHTML=artists
  //切换歌名
  leftName.innerText=name
  //切换图片
  leftImg.src=picUrl
  //切换歌
  audioDemo.src = `http://music.163.com/song/media/outer/url?id=${id}.mp3`
  //播放
  audioDemo.play()
}

export default{changeById}