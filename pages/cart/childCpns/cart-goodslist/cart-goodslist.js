// pages/cart/childCpns/cart-goodslist/cart-goodslist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkBottomClick(e){
      const iid={iid:e.detail.iid}
      this.triggerEvent('checkBottomClick',iid)
    }
  }
})
