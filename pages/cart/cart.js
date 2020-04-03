// pages/cart.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[],
    all:{},
    totalCounter:0,
    totalPrice:0,
    isSelectAll:true
  },

  getTotalPriceAndCount(){
    let totalPrice = 0
    let counter = 0
    for(let item of this.data.goodsList){
      if(item.isSelected){
        totalPrice+=item.price*item.count
        counter++
      }
    }

    // let obj = {}
    // obj.totalPrice=totalPrice
    // obj.count = count

    this.setData({
      totalCounter: counter,
      totalPrice: totalPrice
    })
    

  },
  checkBottomClick(e){
    const goods = this.data.goodsList
    for(let item of goods){
      if(item.iid===e.detail.iid){
        item.isSelected=!item.isSelected
      }
    }
    this.setData({
      goodsList:goods
    })
    this.getTotalPriceAndCount()
  },

  bottomBarCheckClick(e){
    // let itemStatus = e.detail.iconChecked
    // console.log(itemStatus);


    let statue=true

    for(let item of this.data.goodsList){
      if(!item.isSelected){
        statue=false
      }
    }
    this.changeSelected(statue)
  },

  changeSelected(statue){
    const goodsList = this.data.goodsList
    for(let item of goodsList){
      item.isSelected = !statue
    }
    this.setData({
      goodsList:goodsList
    })
  },

  onSelectAll() {
    // 1.判断是否是全部选中
    let goods = this.data.goodsList
    if (this.data.isSelectAll) { // 目前全部选中
      goods.forEach(item => {
        item.isSelected = false
      })
      this.getTotalPriceAndCount()
      this.setData({
        goodsList: goods,
        isSelectAll: false
      })
    } else { // 某些没选中
      goods.forEach(item => {
        item.isSelected = true
      })
      this.getTotalPriceAndCount()
      this.setData({
        goodsList: goods,
        isSelectAll: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      goodsList:app.data.goodsItemList
    })
    this.getTotalPriceAndCount()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      goodsList:app.data.goodsItemList
    })
    this.getTotalPriceAndCount()
    this.setData({
      all:app.data.all
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})