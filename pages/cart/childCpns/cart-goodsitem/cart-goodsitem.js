// pages/cart/childCpns/cart-goodsitem/cart-goodsitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsItem:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    iconChecked:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCheckClick(){
      this.setData({
        iconChecked:!this.data.iconChecked
      })
    }
  }
})
