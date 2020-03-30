// pages/home/home.js

import {getMultiData,getHomeGoods} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    goods:{
      'pop':{page:1,list:[]},
      'new':{page:1,list:[]},
      'sell':{page:1,list:[]}
    },
    currentType:'pop',
    isBackTopShow:false,
    isTabControlShow:false,
    tabControlTop:0
  },

  tabclick(e){
    let currentType=''
    switch(e.detail.index){
      case 0:
        currentType = 'pop'
        break
      case 1:
        currentType = 'new'
        break
      case 2:
        currentType = 'sell'
        break
    }
    this.setData({
      currentType:currentType
    })
  },

  imageLoaded(){
    wx.createSelectorQuery().select('#tab-control').boundingClientRect((rect) => {
      this.setData({
        tabControlTop: rect.top
      })
    }).exec()
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getData();
  },

  _getData(){
    this._getMultiData();
    this._getHomeGoods('pop');
    this._getHomeGoods('new');
    this._getHomeGoods('sell');
  },

// 网络请求相关函数
  _getMultiData(){
    getMultiData().then(res=>{
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners : banners,
        recommends : recommends
      })
    })
  },

  _getHomeGoods(type){
    const page=this.data.goods[type].page;
    getHomeGoods(type,page).then(res=>{
      // 取出数据
      const list=res.data.data.list;
      // 将数据临时存储
      const goods=this.data.goods;
      goods[type].list.push(...list);
      goods[type].page += 1;
      this.setData({
        goods:goods
      })
    })
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
    this._getHomeGoods(this.data.currentType);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


  onPageScroll(options){
    const scrollTop=options.scrollTop
    const flag1 = scrollTop>1000
    if(flag1!=this.data.isBackTopShow){
      this.setData({
        isBackTopShow:scrollTop>1000
      })
    }
    const flag2 = scrollTop>this.data.tabControlTop
    if(flag2!=this.data.isTabControlShow){
      this.setData({
        isTabControlShow:scrollTop>this.data.tabControlTop
      })
    }
  }
})