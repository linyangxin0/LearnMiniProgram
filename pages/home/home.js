// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageURL:''
  },

  handleChooseAlbum(){
    // 系统api让系统在相册中选择图片或拍照
    wx.chooseImage({
      complete: (res) => {
        const path=res.tempFilePaths[0]
        this.setData({
          imageURL:path
        })
      },
    })
  },
  handImageLoad(){
    console.log("图片加载完成")
  }
})